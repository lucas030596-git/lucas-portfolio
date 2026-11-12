'use strict';
(() => {
 const id = document.querySelector('meta[name="ga-measurement-id"]')?.content.trim();
 // Stay inactive until a real property is configured; never track local previews.
 if (!/^G-[A-Z0-9]+$/.test(id || '') ||
     !['lucasescobar.me', 'www.lucasescobar.me'].includes(location.hostname)) return;

 window.dataLayer = window.dataLayer || [];
 const gtag = function () { window.dataLayer.push(arguments); };
 gtag('js', new Date());
 gtag('config', id, {
  send_page_view: false,
  allow_google_signals: false,
  allow_ad_personalization_signals: false
 });
 const script = document.createElement('script');
 script.async = true;
 script.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(id);
 document.head.append(script);

 const projects = new Set(['goodrec', 'qos', 'b2b-plans', 'bulk-assignment']);
 const routes = new Set(['home', 'projects', 'about', 'contact', ...projects]);
 let lastView = '';
 let previousLocation = document.referrer ? (() => {
  try { return new URL(document.referrer).origin; } catch { return ''; }
 })() : '';
 let currentRoute = 'home';
 const send = (event, params = {}) => gtag('event', event, { send_to: id, ...params });

 window.PORTFOLIO_ANALYTICS = {
  view(route, language, unlocked) {
   currentRoute = routes.has(route) ? route : 'not-found';
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

 document.addEventListener('click', event => {
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
