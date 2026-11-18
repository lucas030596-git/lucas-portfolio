'use strict';
window.PORTFOLIO_ACCESSIBILITY_CASE = {
  "eyebrow": "05 / Independent design study",
  "title": "Designing for the states people get stuck in",
  "responsibilities": "Product design · Review and documentation",
  "product": "Lucas Escobar portfolio",
  "platforms": "Responsive web",
  "status": "Pre-launch review",
  "intro": [
    "A mobile checkout can be understood through its states: loading, a completed form, and a collapsed order summary. I borrowed that way of documenting transitions to review my own portfolio before publishing.",
    "I focused on three questions: can visitors complete the journey with assistive technology, when does measurement begin, and which European accessibility obligations might apply?"
  ],
  "overview": [
    [
      "Reference",
      0
    ],
    [
      "Accessibility",
      1
    ],
    [
      "Privacy",
      2
    ],
    [
      "EAA scope",
      3
    ],
    [
      "Validation",
      4
    ]
  ],
  "sections": [
    {
      "label": "Reference",
      "heading": "Start with the moments between screens",
      "html": "<p>The mobile checkout reference showed a loading skeleton, a filled form and a collapsed order summary. I translated those patterns into questions for my portfolio: what is available now, what feedback confirms a change, and how does someone recover when the expected next step is unavailable?</p>",
      "steps": [
        [
          "Loading",
          "Check that the main content is reachable and that the visitor can tell what is available."
        ],
        [
          "Form feedback",
          "Make validation and the transition to an email draft understandable."
        ],
        [
          "Collapsed content",
          "Verify that a visitor can open and close a gallery and return to the triggering control."
        ]
      ]
    },
    {
      "label": "Accessibility",
      "heading": "Follow the journey with keyboard and screen reader",
      "html": "<p>The code includes a skip link, labeled contact fields and a native dialog for enlarged images. The site updates the page language, and existing case studies mark their English content. Those are implementation details I can verify in source. The interaction still needs testing in a browser.</p><ul><li>Open a project, move through its gallery, close it with Escape and check where focus lands (2.1.1, 2.1.2, 2.4.3, 2.4.7 and 2.4.11).</li><li>Switch languages and check that a screen reader uses the right language for the page and the article (3.1.1 and 3.1.2).</li><li>Try an invalid address, correct it and verify that feedback is announced when the email draft opens (3.3.1, 3.3.2 and 4.1.3).</li><li>Measure contrast and test reflow at 320 CSS pixels and touch target size or spacing (1.4.3, 1.4.10 and 2.5.8).</li></ul><p>The target is <a href=\"https://www.w3.org/TR/WCAG22/\">WCAG 2.2 AA</a>. A conformance claim requires evaluating all applicable A and AA criteria for the full scope.</p>"
    },
    {
      "label": "Privacy",
      "heading": "Make the start of measurement explicit",
      "html": "<p>The contact form prepares a draft with the visitor’s name, email address and message in their email client. The visitor decides whether to send it. The corresponding custom analytics event records the route and leaves those form values out.</p><p>In a simulated production hostname, the current script attempted to load Google Analytics before checking for a consent preference. Localhost did not load it. Production traffic, browser storage and the analytics property configuration still need verification.</p><p>If I keep optional analytics and applicable rules require consent, I will test four states: no decision, reject, accept and withdraw. The review also covers the hosting logs, providers, retention and transfers, and whether the <a href=\"https://eur-lex.europa.eu/eli/reg/2016/679/oj/eng\">GDPR</a> applies under Article 3. Cookie consent is assessed separately under applicable national ePrivacy rules.</p>"
    },
    {
      "label": "EAA scope",
      "heading": "Look at what the visitor can actually do",
      "html": "<p>The checkout reference includes an order summary. The portfolio journey I reviewed ends at an email draft. I found no checkout in the reviewed journey. Before drawing a conclusion, I will check outbound destinations, intended markets and whether any service is offered to EU consumers with a view to concluding a consumer contract.</p><p>The <a href=\"https://eur-lex.europa.eu/eli/dir/2019/882/oj/eng\">European Accessibility Act</a> covers specified products and services, including e-commerce services. If a covered service is identified, the next step is to check national implementation and whether the exemption for microenterprises providing services applies.</p>"
    },
    {
      "label": "Validation",
      "heading": "Tie the findings to the version being published",
      "html": "<p>This stage produced a design and source review. Before claiming results, I will record the tested version, browser and assistive technology, the steps and evidence for each issue, and whether the fix passed a second test.</p>",
      "steps": [
        [
          "Verified",
          "Selected Figma states, source behavior of the contact form and simulated analytics initialization."
        ],
        [
          "Pending",
          "Browser accessibility tests, production network and storage checks, and legal scope decisions."
        ]
      ]
    }
  ]
};
