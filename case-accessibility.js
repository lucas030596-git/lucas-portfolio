'use strict';
window.PORTFOLIO_ACCESSIBILITY_CASE = {
  "eyebrow": "05 / Mobile checkout",
  "title": "Making mobile checkout accessible before launch",
  "responsibilities": "Product design · Compliance review",
  "product": "Consumer e-commerce checkout",
  "platforms": "Mobile web",
  "status": "Design reviewed · Implementation testing pending",
  "intro": [
    "A mobile checkout has to make the price, the data request and the final commitment understandable. I reviewed the design state by state and mapped each requirement to a component and a test.",
    "This case traces WCAG 2.2 AA, GDPR and the European Accessibility Act through the loading state, billing form, order summary and payment handoff."
  ],
  "overview": [
    [
      "Flow",
      0
    ],
    [
      "Contrast",
      1
    ],
    [
      "Touch targets",
      2
    ],
    [
      "Forms",
      3
    ],
    [
      "GDPR",
      4
    ],
    [
      "EAA",
      5
    ],
    [
      "Evidence",
      6
    ]
  ],
  "sections": [
    {
      "label": "Reference",
      "heading": "Four checkout states, one compliance question",
      "html": "<p>I inspected the supplied mobile checkout section in Figma. It contains a <strong>375 × 812</strong> loading frame, filled contact and billing forms, separate collapsed and expanded order summaries, and a saved-payment-methods state. I mapped those views to the evidence needed before release.</p><p>The case uses anonymized descriptions of the design. The Figma measurements are recorded in design units. Browser measurements use CSS pixels.</p>",
      "steps": [
        [
          "Loading",
          "Keep the structure understandable while order data loads."
        ],
        [
          "Contact and billing",
          "Explain each required field and help people recover from errors."
        ],
        [
          "Order summary",
          "Make the total, product details and review step easy to find and change."
        ],
        [
          "Payment",
          "Keep the commitment, authentication and outcome usable end to end."
        ]
      ]
    },
    {
      "label": "Contrast · WCAG 1.4.3 and 1.4.11",
      "heading": "The total and the next action must stay readable",
      "html": "<p><strong>Where:</strong> the mobile total, the primary action label, billing field hints and validation messages. WCAG 2.2 AA calls for <strong>4.5:1</strong> for regular text and <strong>3:1</strong> for large text. Large means at least 24 CSS px regular or roughly 18.67 CSS px bold. Visual information needed to identify an active control or its state needs <strong>3:1</strong> against adjacent colors where SC 1.4.11 applies.</p><p><strong>Why:</strong> low contrast can make the amount or the correction disappear for someone with low vision. An error also needs text or another cue beyond color (1.4.1 and 3.3.1).</p><p><strong>Evidence to capture:</strong> measure the foreground and rendered background of the pay label, total header and billing errors in their relevant states. Log the colors, ratio and exact component state. These are acceptance thresholds; production ratios are pending.</p><p><a href=\"https://www.w3.org/TR/WCAG22/#contrast-minimum\">WCAG 1.4.3</a> · <a href=\"https://www.w3.org/TR/WCAG22/#non-text-contrast\">WCAG 1.4.11</a></p>"
    },
    {
      "label": "Touch targets · WCAG 2.5.8",
      "heading": "Give small controls a larger hit area",
      "html": "<p><strong>Where:</strong> the order-summary chevron and billing edit controls. In the handoff, I would specify a <strong>44 × 44 CSS px hit area</strong> for compact icon controls on mobile as a design target. The icon can stay visually smaller. The WCAG 2.2 AA minimum is <strong>24 × 24 CSS px</strong> or an applicable exception, including sufficient spacing. WCAG 2.5.5 specifies 44 × 44 CSS px at AAA, subject to its exceptions.</p><p><strong>Why:</strong> someone with limited dexterity should be able to expand the summary or edit their billing data without activating a nearby control.</p><p><strong>Measured in Figma:</strong> the CTA frame in one collapsed-summary variant is <strong>327 × 52</strong>. A CTA frame in the saved-payment-methods state is <strong>327 × 44</strong>. These measurements describe the selected frames. The summary chevron and billing edit hit areas still need to be measured.</p><p><strong>Evidence to capture:</strong> measure the actual clickable element in DevTools, test adjacent actions by touch and check visible keyboard focus. A Figma icon or container width alone cannot establish the implemented hit area.</p><p><a href=\"https://www.w3.org/TR/WCAG22/#target-size-minimum\">WCAG 2.5.8</a> · <a href=\"https://www.w3.org/TR/WCAG22/#target-size-enhanced\">WCAG 2.5.5</a></p>"
    },
    {
      "label": "Form and review · WCAG 3.3",
      "heading": "Help people correct details before committing",
      "html": "<p><strong>Where:</strong> contact email, billing editing, loading feedback and the collapsed order summary. Keep persistent labels, identify the field with the error in text, and give a correction when known. Preserve valid entries when the buyer returns to edit the order. For billing data already supplied in the same process, repopulate it or make it available to select when WCAG 3.3.7 applies.</p><p>Use a keyboard-operable button with a programmatic expanded state for the summary. Announce loading completion, errors or payment feedback when they qualify as status messages. For a financial commitment, provide a way to review, confirm and correct the order before submitting. WCAG 3.3.4 also permits a reversible submission or a checked-input mechanism meeting the criterion.</p><p><strong>Evidence to capture:</strong> open and close the summary, submit an invalid email, correct billing, confirm the final amount and try a declined payment. Verify keyboard focus, accessible names and screen-reader feedback at each transition.</p><p><a href=\"https://www.w3.org/TR/WCAG22/#input-assistance\">WCAG input assistance</a> · <a href=\"https://www.w3.org/TR/WCAG22/#status-messages\">WCAG 4.1.3</a></p>"
    },
    {
      "label": "Privacy · GDPR",
      "heading": "Tie every requested field to a purpose",
      "html": "<p><strong>Where:</strong> the email field, billing details, payment provider and optional tracking. Document why each field is required, who receives it and how long it is kept. Order fulfilment may rely on contract necessity for data genuinely needed for that purpose. Any billing field kept for a legal obligation needs that obligation identified. Present the Article 13 information when collecting the data and document the Article 6 basis per purpose.</p><p><strong>Design decision:</strong> collect only what the purchase needs under Article 5(1)(c), and use privacy-protective defaults under Article 25. Keep optional marketing separate from purchase and leave any consent choice off by default. Verify the payment provider relationship and data handoff. Test optional trackers separately under applicable ePrivacy rules, including reject and withdraw states where consent is required.</p><p><strong>Evidence to capture:</strong> field-to-purpose inventory, privacy notice, provider and retention records, and a network/storage test of the deployed checkout. The Figma flow establishes where data is requested, while those records establish how it is processed.</p><p><a href=\"https://eur-lex.europa.eu/eli/reg/2016/679/oj\">GDPR Articles 5, 6, 7, 13 and 25</a> · <a href=\"https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX%3A62017CJ0673\">Planet49</a></p>"
    },
    {
      "label": "EAA · legal scope",
      "heading": "Carry accessibility through the payment handoff",
      "html": "<p><strong>Where:</strong> order review, checkout payment, and any external security or authentication step. For a covered EU consumer e-commerce service, Article 2(2)(f) and Annex I sections III and IV(g) of Directive (EU) 2019/882 are relevant. The Annex requires accessible service websites and accessible identification, security and payment functionality. It also covers providing the accessibility information for products or services when supplied by the responsible operator.</p><p><strong>Design decision:</strong> test the journey through the payment provider, including return, failure and retry. Verify the applicable national transposition and scope before making a legal claim. The ratios and target sizes in this case come from WCAG 2.2. The EAA sets service accessibility requirements. A legal assessment also needs the applicable standards, national rules and evidence from the service itself.</p><p><a href=\"https://eur-lex.europa.eu/eli/dir/2019/882/oj\">EAA Article 2 and Annex I</a></p>"
    },
    {
      "label": "Evidence",
      "heading": "What the design review can establish",
      "html": "<p>I verified which states exist in the supplied mobile checkout section, including its loading skeleton, contact and billing areas, open and closed order summaries, saved payment methods and CTA frame dimensions. I turned those into implementation acceptance criteria. The rendered touch targets, contrast ratios, keyboard and assistive-technology behavior, payment integration and data processing still require testing. This case records the rationale for each check before release.</p>"
    }
  ]
};
