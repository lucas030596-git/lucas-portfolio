'use strict';
(() => {
 const storageKey = 'portfolio-cookie-preference';
 const preferenceLifetime = 180 * 24 * 60 * 60 * 1000;
 let preference = readChoice();
 let expiryTimer;
 function readChoice() {
  try {
   const saved = JSON.parse(localStorage.getItem(storageKey));
   return saved?.version === 1 && typeof saved.analytics === 'boolean' &&
    Number.isFinite(saved.at) && saved.at <= Date.now() && Date.now() - saved.at < preferenceLifetime ? saved : null;
  } catch { return null; }
 }
 function currentChoice() {
  return preference && Date.now() - preference.at < preferenceLifetime ? preference.analytics : null;
 }
 function scheduleExpiry() {
  clearTimeout(expiryTimer);
  if (currentChoice() === null) return;
  const remaining = preferenceLifetime - (Date.now() - preference.at);
  expiryTimer = setTimeout(notify, Math.min(remaining, 2147483647));
 }
 function notify() {
  scheduleExpiry();
  syncAnalytics();
  window.dispatchEvent(new Event('portfolio-consent-change'));
 }
 window.PORTFOLIO_CONSENT = {
  choice: currentChoice,
  set(analytics) {
   preference = { version: 1, analytics: analytics === true, at: Date.now() };
   try { localStorage.setItem(storageKey, JSON.stringify(preference)); } catch { /* Keep the choice for this page. */ }
   notify();
  }
 };
 window.addEventListener('storage', event => {
  if (event.key !== storageKey && event.key !== null) return;
  preference = readChoice();
  notify();
 });
 window.addEventListener('pageshow', notify);
 document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible' && preference && currentChoice() === null) notify();
 });

 const id = document.querySelector('meta[name="ga-measurement-id"]')?.content.trim();
 const production = /^G-[A-Z0-9]+$/.test(id || '') &&
  ['lucasescobar.me', 'www.lucasescobar.me'].includes(location.hostname);
 let enabled = false;
 let started = false;
 const gtag = function () { window.dataLayer.push(arguments); };
 function startAnalytics() {
  if (started) return;
  started = true;
  window.dataLayer = window.dataLayer || [];
  gtag('js', new Date());
  gtag('config', id, {
   send_page_view: false,
   allow_google_signals: false,
   allow_ad_personalization_signals: false,
   cookie_expires: preferenceLifetime / 1000,
   cookie_update: false
  });
  const script = document.createElement('script');
  script.async = true;
  script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
  document.head.append(script);
 }
 function stopAnalytics() {
  lastView = '';
  previousLocation = '';
  for (const item of document.cookie.split(';')) {
   const name = item.split('=')[0].trim();
   if (!/^_ga(?:_[A-Z0-9]+)?$/i.test(name)) continue;
   document.cookie = name + '=; Max-Age=0; Path=/';
   document.cookie = name + '=; Max-Age=0; Path=/; Domain=lucasescobar.me';
  }
 }
 const projects = new Set(['goodrec', 'qos', 'b2b-plans', 'bulk-assignment']);
 const routes = new Set(['home', 'projects', 'about', 'contact', 'privacy', 'accessibility-and-privacy', ...projects]);
 let lastView = '';
 let previousLocation = document.referrer ? (() => {
  try { return new URL(document.referrer).origin; } catch { return ''; }
 })() : '';
 let currentRoute = 'home';
 const send = (event, params = {}) => {
  if (enabled && currentChoice() === true) gtag('event', event, { send_to: id, ...params });
 };
 let lastRoute;
 function syncAnalytics() {
  if (!production) return;
  const allowed = currentChoice() === true;
  if (enabled === allowed) return;
  enabled = allowed;
  window['ga-disable-' + id] = !allowed;
  if (!allowed) { stopAnalytics(); return; }
  startAnalytics();
  if (lastRoute) window.PORTFOLIO_ANALYTICS.view(...lastRoute);
 }

 window.PORTFOLIO_ANALYTICS = {
  view(route, language, unlocked) {
   currentRoute = routes.has(route) ? route : 'not-found';
   lastRoute = [route, language, unlocked];
   if (!enabled || currentChoice() !== true) return;
   const lang = ['en', 'es', 'pt'].includes(language) ? language : 'en';
   const key = currentRoute + ':' + lang;
   // Unlocking a case or rendering the same view must not add another pageview.
   if (key === lastView) return;
   lastView = key;
   const pageLocation = location.origin + location.pathname + '?lang=' + lang +
    '#/' + (currentRoute === 'home' ? '' : currentRoute);
   send('page_view', {
    page_title: document.title,
    page_location: pageLocation,
    page_referrer: previousLocation,
    page_route: currentRoute,
    portfolio_language: lang
   });
   previousLocation = pageLocation;
   if (projects.has(currentRoute)) send('project_open', {
    project_id: currentRoute, access_state: unlocked ? 'unlocked' : 'locked'
   });
  },
  unlock(slug) {
   if (projects.has(slug)) send('project_unlock', { project_id: slug });
  },
  contactDraft() {
   // Records intent only: the form opens an email draft; it does not send mail.
   send('contact_draft', { page_route: currentRoute });
  }
 };

 if (production && currentChoice() !== true) {
  window['ga-disable-' + id] = true;
  stopAnalytics();
 }
 scheduleExpiry();
 syncAnalytics();
 document.addEventListener('click', event => {
  if (!enabled || currentChoice() !== true) return;
  const anchor = event.target.closest('a[href]');
  if (!anchor) return;
  const url = new URL(anchor.href, location.href);
  if (url.protocol === 'mailto:') send('contact_click', {
   contact_method: 'email', page_route: currentRoute
  });
  if (url.hostname === 'www.linkedin.com') send('contact_click', {
   contact_method: 'linkedin', page_route: currentRoute
  });
  if (url.hostname === 'www.dropbox.com' &&
      url.pathname.endsWith('/CV-Lucas-Escobar-Product-Designer.pdf')) {
   // A click on the CV link cannot confirm that the download completed.
   send('cv_click', { page_route: currentRoute });
  }
 });
})();
