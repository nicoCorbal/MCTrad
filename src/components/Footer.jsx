import { useTranslation } from "react-i18next";
import { LocalizedLink } from "./LocalizedLink";
import Logo from "./Logo";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="site-footer border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          <div>
            <LocalizedLink to="/" className="inline-flex items-center gap-3">
              <Logo decorative className="shrink-0" />
              <div>
                <span className="font-serif text-xl text-gray-900 block">
                  María Ángeles Capas
                </span>
                <span className="text-xs text-gray-500 uppercase tracking-wider">
                  {t("common.swornTranslator")}
                </span>
              </div>
            </LocalizedLink>
            <p className="text-gray-600 text-sm mt-4 leading-relaxed">
              {t("footer.description")}
            </p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              {t("common.quickLinks")}
            </p>
            <nav className="space-y-2" aria-label={t("common.quickLinks")}>
              {[
                ["/", "home"],
                ["/servicios", "services"],
                ["/tarifas", "pricing"],
                ["/sobre-mi", "about"],
                ["/contacto", "contact"],
              ].map(([to, key]) => (
                <div key={key}>
                  <LocalizedLink
                    to={to}
                    className="text-gray-600 hover:text-blue-600 transition-colors text-sm"
                  >
                    {t(key)}
                  </LocalizedLink>
                </div>
              ))}
            </nav>
          </div>
          <div>
            <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">
              {t("common.certifications")}
            </p>
            <div className="space-y-4">
              {["spain", "germany"].map((country) => (
                <div key={country}>
                  <p className="text-sm text-gray-900">
                    {t(`footer.${country}.country`)}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    {t(`footer.${country}.authority`)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500">
          <p>© {new Date().getFullYear()} María Ángeles Capas</p>
          <div className="flex items-center gap-5">
            <LocalizedLink
              to="/aviso-legal"
              className="hover:text-blue-600 transition-colors"
            >
              {t("legalPage.title")}
            </LocalizedLink>
            <LocalizedLink
              to="/privacidad"
              className="hover:text-blue-600 transition-colors"
            >
              {t("common.privacyPolicy")}
            </LocalizedLink>
          </div>
        </div>
      </div>
    </footer>
  );
}
