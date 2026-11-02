import { useEffect } from "react";
import { trackContactEvent, trackPageView } from "../utils/analytics";

export default function Analytics() {
  useEffect(() => {
    const emailClick = (event) => {
      if (
        event.target instanceof Element &&
        event.target.closest('a[href^="mailto:"]')
      ) {
        trackContactEvent("contact_email_click", "email");
      }
    };
    document.addEventListener("seo:ready", trackPageView);
    document.addEventListener("click", emailClick);
    // Catch a prerendered page whose head was ready before this listener mounted.
    trackPageView();
    return () => {
      document.removeEventListener("seo:ready", trackPageView);
      document.removeEventListener("click", emailClick);
    };
  }, []);
  return null;
}
