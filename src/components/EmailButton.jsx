import { useTranslation } from "react-i18next";

export default function EmailButton() {
  const { t } = useTranslation();
  const mailto = `mailto:capaslopez@gmail.com?subject=${encodeURIComponent(t("common.emailSubject"))}&body=${encodeURIComponent(t("common.emailBody"))}`;
  return (
    <a
      href={mailto}
      className="contact-shortcut fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      aria-label={t("common.sendEmail")}
    >
      <span className="contact-shortcut-content">
        <span className="contact-shortcut-icon">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 6h18v12H3zM3 6l9 7 9-7"
            />
          </svg>
        </span>
        <span className="hidden md:flex flex-col">
          <strong>{t("common.quoteLabel")}</strong>
          <span>{t("common.responseTime")}</span>
        </span>
      </span>
    </a>
  );
}
