'use strict';
window.PORTFOLIO_ACCESSIBILITY_CASE = {
  "eyebrow": "05 / Mobile checkout",
  "title": "Designing a checkout people can trust",
  "responsibilities": "Product Designer · Mobile web",
  "product": "Consumer e-commerce checkout",
  "platforms": "Mobile web",
  "status": "Launched",
  "intro": [
    "When I’m buying something on my phone, I often scroll back up to double-check what I’m about to pay. I wanted the checkout to make that easy, even halfway through the form.",
    "That idea shaped the order summary, the details I asked for, and the way buyers move into payment."
  ],
  "overview": [
    [
      "Order summary",
      0
    ],
    [
      "Data and consent",
      1
    ],
    [
      "Contrast",
      2
    ],
    [
      "Touch",
      3
    ],
    [
      "Payment",
      4
    ],
    [
      "Looking back",
      5
    ]
  ],
  "sections": [
    {
      "label": "The order summary",
      "heading": "Keep the price within reach",
      "html": "<p>I gave the order summary two states. Closed, it shows the product and the amount and leaves room for the form. Open, it shows the breakdown, including taxes and the next billing date. Buyers can check those details and get straight back to what they were doing.</p><p>The loading screen keeps the same structure so the page feels familiar when the order details arrive.</p>",
      "gallery": [
        {
          "image": "checkout-summary-collapsed.webp",
          "width": 660,
          "height": 1677,
          "alt": "Mobile checkout with a collapsed order summary, empty personal details fields and inactive payment buttons.",
          "caption": "With the summary closed, the product and price stay in view."
        },
        {
          "image": "checkout-summary-expanded.webp",
          "width": 660,
          "height": 1932,
          "alt": "Mobile checkout with an expanded order summary, itemized total, masked form values and available payment buttons.",
          "caption": "Opening the summary reveals the tax breakdown and the next billing date."
        }
      ]
    },
    {
      "label": "Data and consent",
      "heading": "Make the choice about offers easy to understand",
      "html": "<p>The details needed to place an order sit together. I kept the invitation to receive offers separate because it’s a different decision. In the follow-up design, the opt-in starts unchecked and the buyer can continue either way.</p><p>For the handoff, I used the GDPR’s data-minimization and privacy-by-default principles to frame the review of which fields we ask for and why. <a href=\"https://eur-lex.europa.eu/eli/reg/2016/679/oj\">GDPR · Articles 5 and 25</a></p>"
    },
    {
      "label": "Visual decisions",
      "heading": "Make it easy to see where to act",
      "html": "<p>The saved-card screen is a good example. The amount and the Pay button lead the eye, and the security-code field gives the buyer one clear place to act. I used WCAG contrast targets to guide the field outline, the checkbox and the button label.</p><p>In Figma, I gave the fields a darker outline and kept a white mark on a deeper green for the selected checkbox. The updated outline reaches <strong>3.47:1</strong> on white and <strong>3.27:1</strong> on the pale panel. The selected mark reaches <strong>4.70:1</strong>. The Pay label in the saved-card design measures <strong>14.20:1</strong>.</p><p><a href=\"https://www.w3.org/TR/WCAG22/#contrast-minimum\">WCAG 1.4.3 · Text contrast</a> · <a href=\"https://www.w3.org/TR/WCAG22/#non-text-contrast\">WCAG 1.4.11 · Control contrast</a></p>",
      "gallery": [
        {
          "image": "checkout-saved-payment.webp",
          "width": 660,
          "height": 1042,
          "alt": "Saved-payment screen with masked card details, a security-code field and a dark Pay button.",
          "caption": "The saved-card screen keeps the security code and the amount close to the payment action."
        }
      ]
    },
    {
      "label": "Designing for touch",
      "heading": "Leave room around the little things",
      "html": "<p>The summary chevron is small, but it opens the details someone may want to see right before paying. I aimed for a <strong>44 × 44 CSS px</strong> tap area around compact controls like that one and Edit. The icons can stay small while the actions are easier to reach.</p><p>WCAG 2.2 AA sets a <strong>24 × 24 CSS px</strong> minimum for pointer targets, with exceptions such as sufficient spacing. The handoff calls for checking the interactive area in the browser. <a href=\"https://www.w3.org/TR/WCAG22/#target-size-minimum\">WCAG 2.5.8 · Target size</a></p>"
    },
    {
      "label": "Payment handoff",
      "heading": "Carry that clarity through payment",
      "html": "<p>Choosing another payment method or completing authentication can take someone out of the main checkout. I included those transitions in the handoff, including how the buyer returns to the checkout.</p><p>That matters for accessibility, too. For covered EU e-commerce services, the European Accessibility Act includes identification, security and payment functions in its scope. I used that as a reason to look at the whole journey, through the provider and back. <a href=\"https://eur-lex.europa.eu/eli/dir/2019/882/oj\">EAA · Annex I</a></p>"
    },
    {
      "label": "Looking back",
      "heading": "The review step is part of the purchase",
      "html": "<p>What I took from this project is how often people pause to double-check something: the total, the information they entered, or the card they want to use. Making it easy to check those details helped me decide what to keep visible, from the summary to the final payment button.</p>"
    }
  ]
};
