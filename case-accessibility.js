'use strict';
window.PORTFOLIO_ACCESSIBILITY_CASE = {
  "eyebrow": "05 / Mobile checkout",
  "title": "Designing a checkout people can trust",
  "responsibilities": "Product Designer · Mobile checkout",
  "product": "Consumer e-commerce checkout",
  "platforms": "Mobile web",
  "status": "Design case study · Pre-launch validation",
  "intro": [
    "I designed the mobile checkout around one question: can someone tell what they’re paying, why I’m asking for their information, and what happens when they tap Pay?",
    "I kept those decisions visible across the flow. That meant showing the amount before the form, preserving a path back to the order details, and reviewing the states where a buyer could get stuck."
  ],
  "overview": [
    [
      "The flow",
      0
    ],
    [
      "Form and recovery",
      1
    ],
    [
      "Privacy",
      2
    ],
    [
      "Contrast",
      3
    ],
    [
      "Touch targets",
      4
    ],
    [
      "Payment and EAA",
      5
    ],
    [
      "What I learned",
      6
    ]
  ],
  "sections": [
    {
      "label": "The challenge",
      "heading": "Keep the purchase in view while people fill in the form",
      "html": "<p>On mobile, the order details and the form compete for space. Keeping the full breakdown open would push the form down. Hiding the order completely would make the buyer leave their place to check the price.</p><p>I kept the product and amount visible in the collapsed summary. The expanded state makes room for the total, taxes and the next billing date. That gives someone enough context to continue and a clear place to check the charge before confirming.</p><p>I designed a loading skeleton for the same view. The structure stays recognizable as the order loads. The screenshots below are cropped Figma exports with example values masked.</p>",
      "gallery": [
        {
          "image": "checkout-summary-collapsed.webp",
          "width": 660,
          "height": 1677,
          "alt": "Mobile checkout with a collapsed order summary, empty personal details fields and inactive payment buttons.",
          "caption": "Collapsed summary · The product and amount remain visible as the buyer starts the form."
        },
        {
          "image": "checkout-summary-expanded.webp",
          "width": 660,
          "height": 1932,
          "alt": "Mobile checkout with an expanded order summary, itemized total, masked form values and available payment buttons.",
          "caption": "Expanded summary · The buyer can review the total, tax and next billing date before paying."
        }
      ]
    },
    {
      "label": "Form and recovery",
      "heading": "Give buyers a way back before they pay",
      "html": "<p>I grouped personal details together, kept the order summary within the flow, and gave returning buyers a separate path for saved payment methods. That brings attention back to the information needed for the chosen payment path, such as the security code.</p><p>For handoff, I specified what happens when the flow breaks: identify the field and the correction in text, keep valid entries when someone edits their details, and communicate the result of a payment attempt. The summary should work with a keyboard and expose whether it is expanded. Showing the final total and letting the buyer review and correct the order before committing is the route I chose for financial error prevention.</p><p><a href=\"https://www.w3.org/TR/WCAG22/#error-prevention-legal-financial-data\">WCAG 3.3.4 · Financial error prevention</a> · <a href=\"https://www.w3.org/TR/WCAG22/#status-messages\">WCAG 4.1.3 · Status messages</a></p>"
    },
    {
      "label": "Privacy choices",
      "heading": "Ask for data at the point it becomes relevant",
      "html": "<p>I separated the information needed to complete the purchase from the invitation to receive offers. The personal details and saved-payment screens show where that choice matters: the buyer should be able to tell why a detail is requested and continue without agreeing to marketing.</p><p>The reviewed Figma state shows the offers checkbox selected. For implementation, my handoff calls for an unchecked default if consent is the basis for marketing, with purchase available either way. I also mapped each field to a question for the privacy review: what is it used for, is it necessary, and who receives it? The form can show where those questions arise. The privacy notice, provider setup, retention and tracking behavior need separate verification.</p><p><a href=\"https://eur-lex.europa.eu/eli/reg/2016/679/oj\">GDPR Articles 5, 6, 7, 13 and 25</a></p>"
    },
    {
      "label": "Design validation",
      "heading": "The price was readable. The form boundaries needed work.",
      "html": "<p>I checked three Figma states after laying out the flow. I wanted to know whether someone could read the price, recognize where to enter information, and tell whether an optional choice was selected. I compared foreground and adjacent background colors using WCAG relative luminance.</p>\n<h3>Text and labels · WCAG 1.4.3</h3>\n<ul><li><strong>Order total and summary title:</strong> #292B2E on #FFFFFF, <strong>14.20:1</strong>.</li><li><strong>Pay with a saved method:</strong> #FFFFFF on #292B2E, <strong>14.20:1</strong>.</li><li><strong>Pay another way, active:</strong> #292B2E on #48EC86, <strong>9.21:1</strong>.</li><li><strong>Email placeholder:</strong> #56575A on #FFFFFF, <strong>7.22:1</strong>.</li><li><strong>Security code hint:</strong> #292B2E on #F8F8FB, <strong>13.39:1</strong>.</li></ul>\n<p>All five text combinations clear the <strong>4.5:1</strong> minimum for normal text. The alternative <strong>3:1</strong> minimum applies to large text.</p>\n<h3>Control boundaries and selected state · WCAG 1.4.11</h3>\n<ul><li><strong>Summary chevron:</strong> #292B2E on #F8F8FB reaches <strong>13.39:1</strong>.</li><li><strong>Email input border:</strong> #CCD0D7 on #FFFFFF reaches <strong>1.55:1</strong>. The outline is the visible field boundary in this state.</li><li><strong>Security code input border:</strong> #CCD0D7 on the adjacent #F8F8FB panel reaches <strong>1.46:1</strong>. Its white interior provides too little separation from the panel to compensate.</li><li><strong>Selected email-offers checkbox:</strong> the white checkmark on #36B37E reaches <strong>2.66:1</strong>. The mark communicates the selected state.</li></ul>\n<p><strong>My next iteration:</strong> use #858A93 for field outlines, which reaches 3.47:1 on white and 3.27:1 on the pale panel. Darken the selected checkbox fill to #23835B to reach 4.70:1 with the white mark. Then verify active, error and focus states against their rendered backgrounds.</p>\n<p>The audit covers the listed Figma pairs. I did not find an error state in the sample, so validation messages, focus and the checkout in the browser are part of the next test.</p>\n<p><a href=\"https://www.w3.org/TR/WCAG22/#contrast-minimum\">WCAG 1.4.3</a> · <a href=\"https://www.w3.org/TR/WCAG22/#non-text-contrast\">WCAG 1.4.11</a></p>",
      "gallery": [
        {
          "image": "checkout-saved-payment.webp",
          "width": 660,
          "height": 1042,
          "alt": "Saved-payment screen with masked card details, a security-code field with a pale outline and a dark Pay button.",
          "caption": "Saved payment method · The Pay label reaches 14.20:1. The security-code field outline reaches 1.46:1 against the pale panel."
        }
      ]
    },
    {
      "label": "Touch targets",
      "heading": "Give the small controls room to work",
      "html": "<p>The chevron and edit actions matter just as much as the payment button. A buyer who misses the chevron can lose the chance to review the order. I specified a 44 × 44 CSS px interaction area for compact controls in the handoff, while keeping their visual icons small. WCAG 2.2 AA calls for at least 24 × 24 CSS px or an applicable exception, including sufficient spacing.</p><p>The visible Pay component measures <strong>295 × 48 design units</strong> in Figma. I would verify the implementation by measuring the actual clickable region for Pay, the summary toggle and Edit, then using each with touch and a keyboard.</p><p><a href=\"https://www.w3.org/TR/WCAG22/#target-size-minimum\">WCAG 2.5.8 · Minimum target size</a></p>"
    },
    {
      "label": "Payment and EAA",
      "heading": "Follow the handoff all the way through payment",
      "html": "<p>I included the saved-card state and a route to other payment methods because some of the hardest steps happen outside the main form. The design review carries through the handoff: verify that buyers can identify the amount, complete authentication, understand a failure and return to try again.</p><p>For a covered EU consumer e-commerce service, the EAA requires accessible service websites and accessible identification, security and payment functions. I used WCAG 2.2 to turn that goal into testable checks for the interface. The EAA scope, national implementation and payment provider still need review for the deployed service.</p><p><a href=\"https://eur-lex.europa.eu/eli/dir/2019/882/oj\">European Accessibility Act · Article 2 and Annex I</a></p>"
    },
    {
      "label": "What I learned",
      "heading": "The details that make the flow usable",
      "html": "<p>I started with the price and the payment action. The contrast review showed that both were clear in the sampled states, while the boundaries of the fields and the selected checkbox were harder to see. That changed what I would prioritize in the next iteration: stronger cues for where to act and what is selected.</p><p>The Figma review produced measured findings and proposed fixes. The next validation is to verify them in the implemented flow with keyboard, screen reader and touch, then check error states, payment return paths and the live handling of personal data.</p>"
    }
  ]
};
