const customFormAction = import.meta.env.PUBLIC_CONNECT_CARD_FORM_ACTION;
const defaultFormAction = "/api/connect-card";
const thankYouPath = "/connect/connect-card/thank-you";

const formAction = customFormAction || defaultFormAction;
const usesCustomFormAction = Boolean(customFormAction);
const turnstileSiteKey = import.meta.env.PUBLIC_TURNSTILE_SITE_KEY ?? "";

const buildThankYouUrl = (origin?: string) => {
  if (origin) {
    return `${origin}${thankYouPath}`;
  }
  return thankYouPath;
};

export { formAction, usesCustomFormAction, turnstileSiteKey, buildThankYouUrl };
