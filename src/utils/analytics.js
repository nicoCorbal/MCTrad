import { pageEntries } from "../config/routes.js";
import { SITE_URL } from "../config/seo.js";

export const MEASUREMENT_ID = "G-0VDR7CFGQB";
let lastPagePath;

const currentPage = () => {
  if (window.location.origin !== SITE_URL || typeof window.gtag !== "function")
    return null;
  return pageEntries.find((entry) => entry.path === window.location.pathname);
};

// Do not send development, preview, unknown URLs or query-string data to GA4.
export function initializeAnalytics() {
  if (window.location.origin !== SITE_URL || window.gtag) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", MEASUREMENT_ID, {
    send_page_view: false,
    page_location: `${SITE_URL}${window.location.pathname}`,
  });
  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);
}

export function trackPageView() {
  const page = currentPage();
  if (
    !page ||
    lastPagePath === page.path ||
    document.documentElement.lang !== page.lang ||
    document.querySelector('link[rel="canonical"]')?.href !==
      `${SITE_URL}${page.path}`
  )
    return false;
  lastPagePath = page.path;
  window.gtag("event", "page_view", {
    send_to: MEASUREMENT_ID,
    page_title: document.title,
    page_path: page.path,
    page_location: `${SITE_URL}${page.path}`,
    language: page.lang,
  });
  return true;
}

// Only route identifiers are sent; never include form fields or email URLs.
export function trackContactEvent(name, method) {
  const page = currentPage();
  if (!page || !["generate_lead", "contact_email_click"].includes(name))
    return false;
  window.gtag("event", name, {
    send_to: MEASUREMENT_ID,
    method,
    language: page.lang,
    page_path: page.path,
    page_location: `${SITE_URL}${page.path}`,
  });
  return true;
}
