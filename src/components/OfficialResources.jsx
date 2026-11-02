import { useTranslation } from "react-i18next";

const publicDocuments = (lang) =>
  `https://europa.eu/youreurope/citizens/family/couple/getting-public-documents-accepted/index_${lang}.htm`;
const resources = {
  "birth-certificate": (lang) => [
    ["Your Europe · EU 2016/1191", publicDocuments(lang)],
  ],
  "marriage-certificate": (lang) => [
    ["Your Europe · EU 2016/1191", publicDocuments(lang)],
  ],
  "university-degree": () => [
    [
      "Valida-TE · Ministerio de Ciencia, Innovación y Universidades",
      "https://www.ciencia.gob.es/Universidades/validate/homologacion.html",
    ],
    [
      "Anerkennung in Deutschland",
      "https://www.anerkennung-in-deutschland.de/html/en/index.php",
    ],
  ],
  "notarial-documents": () => [
    [
      "HCCH · Apostille",
      "https://www.hcch.net/en/instruments/conventions/specialised-sections/apostille",
    ],
  ],
  "court-documents": () => [
    [
      "European e-Justice · España",
      "https://e-justice.europa.eu/topics/court-procedures/civil-cases/recognition-enforcement-court-decisions/how-enforce-court-decision/es_en",
    ],
    [
      "European e-Justice · Deutschland",
      "https://e-justice.europa.eu/topics/court-procedures/civil-cases/recognition-enforcement-court-decisions/how-enforce-court-decision/de_en",
    ],
  ],
  "retirement-pension": () => [
    [
      "Deutsche Rentenversicherung · Ausland",
      "https://www.deutsche-rentenversicherung.de/DRV/DE/Rente/Ausland/ausland_node.html",
    ],
  ],
};

export default function OfficialResources({ service, lang }) {
  const { t } = useTranslation();
  const links = resources[service]?.(lang);
  if (!links) return null;
  return (
    <aside className="official-resources">
      <h3>{t("officialResources.title")}</h3>
      <p>{t("officialResources.description")}</p>
      <ul>
        {links.map(([label, url]) => (
          <li key={url}>
            <a href={url} target="_blank" rel="noopener noreferrer">
              {label} <span aria-hidden="true">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </aside>
  );
}
