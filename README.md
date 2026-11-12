# Lucas Escobar — Portfolio

A static product design portfolio featuring GoodRec and Holafly.

## Preview
Open `index.html` or serve the repository root with any static HTTP server. No build or dependency installation is needed.

## Files
- `index.html`: document shell and metadata.
- `styles.css`: responsive layouts and local fonts.
- `app.js`: pages, navigation, galleries, and contact.
- `content.js`: case study data and original encrypted Holafly text.
- `assets/`: images and fonts.

## GitHub Pages
In repository **Settings → Pages**, set **Source → GitHub Actions**. The included **Deploy portfolio to GitHub Pages** workflow publishes the site after pushes to `main`. Run it manually from Actions after enabling Pages if needed.

## Notes
The contact form opens a draft in the visitor's email app; it does not send messages.
GoodRec launch results are pending. Unverified baseline numbers were omitted.
Holafly text retains its supplied password encryption. Static images are downloadable and are not protected by the password gate.

All portfolio content and imagery belong to their respective owners.

## Google Analytics 4

The `ga-measurement-id` meta tag in `index.html` connects to `G-6Q09Z8VF0H`.
Analytics only runs on
`lucasescobar.me` and `www.lucasescobar.me`, never on local previews.

Before activation, in GA4 Admin → Data streams → this web stream → Enhanced
measurement → Page views → Show advanced settings, disable page changes
based on browser history events. Initial automatic views are disabled in code
with `send_page_view: false`.
The application sends pageviews manually because navigation uses hash routes.
Do not install an additional Google tag or Tag Manager pageview tag.

| Event | Meaning |
| --- | --- |
| `page_view` | Initial page or a different route/language; unlock renders do not duplicate it. |
| `project_open` | A project page was opened; `project_id` identifies it and `access_state` describes its gate. |
| `project_unlock` | The password was accepted and content was decrypted. |
| `cv_click` | The CV link was clicked, not a confirmed download. |
| `contact_click` | An email or LinkedIn link was clicked; see `contact_method`. |
| `contact_draft` | A valid contact form opened an email draft, not a confirmed message. |

Create event-scoped custom dimensions for `project_id`, `access_state`,
`contact_method`, `page_route`, and `portfolio_language` if needed in reports.
Contact form values, passwords, and the CV's Dropbox access parameters are never
included in these custom events. Page locations contain only a known route and
language; external referrers are reduced to their origin. Google Signals and ad
personalization signals are disabled. Search indexing directives are unchanged.

After setting the ID and deploying, verify pageviews and events in GA4 Realtime
or DebugView (using Tag Assistant). Check home → project gate → unlock → CV →
contact, language changes, and browser back/forward; ensure one pageview per
navigation. Collection has not been verified until a real property is connected.
