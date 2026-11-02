import { useTranslation } from "react-i18next";
import Logo from "./Logo";

export default function Loader() {
  const { t } = useTranslation();
  return (
    <div role="status" aria-label={t("common.loading")} className="site-loader">
      <Logo size="large" decorative />
      <p>María Ángeles Capas</p>
      <span className="loading-line" aria-hidden="true" />
    </div>
  );
}
