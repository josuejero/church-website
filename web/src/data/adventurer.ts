// Central source for frequently updated Adventurer content (registration/memo/calendar links, year label, guide copy, and payment wording).
// Update this file whenever the registration link, memo path, calendar CTA, payment instructions, or year label change.
export type AdventurerPaymentMethod = {
  label: string;
  detail: string;
};

export type AdventurerConfig = {
  yearLabel: string;
  guideText: string;
  registration: {
    url: string;
    ctaLabel: string;
    note: string;
  };
  memo: {
    path: string;
    ctaLabel: string;
    note: string;
  };
  calendar: {
    ctaHref: string;
    ctaLabel: string;
    note: string;
  };
  payment: {
    intro: string;
    methods: AdventurerPaymentMethod[];
  };
};

const adventurerConfig: AdventurerConfig = {
  yearLabel: "2026",
  guideText:
    "Start with the memo, check the campus calendar, then finish the registration form so the family plan stays in one place.",
  registration: {
    url: "https://example.com/adventurer-registration",
    ctaLabel: "Register Now",
    note:
      "Opens a secure registration form in a new tab. Placeholder link - please update with the final form URL once available.",
  },
  memo: {
    path: "/resources/2026/03/adventurer-club-memo",
    ctaLabel: "View Memo",
    note: "This page hosts the current Adventurer memo.",
  },
  calendar: {
    ctaHref: "/calendar",
    ctaLabel: "View campus calendar",
    note: "Use the shared campus calendar for the latest Adventurer, Pathfinder, and church-wide dates.",
  },
  payment: {
    intro:
      "Dues keep uniforms, awards, and classroom supplies stocked. Please use one of the payment methods below and include your Adventurer's name when applicable.",
    methods: [
      { label: "CashApp", detail: "$juniorpioneersac" },
      {
        label: "Online",
        detail: "AdventistGiving - select 'Adventurer Club' when you make your donation.",
      },
      {
        label: "In-person",
        detail:
          "Place your payment in a tithe envelope with your Adventurer's name clearly written, then remit it during tithe and offering. Add the child's name on the check's memo line and make checks payable to 'First Springfield Seventh-day Adventist Church.'",
      },
    ],
  },
};

export default adventurerConfig;
