import { Link, useParams } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { supportedLanguages } from '../config/languages';

const messages = {
  es: ['Página no encontrada', 'La dirección no existe o ha cambiado.', 'Volver al inicio'],
  de: ['Seite nicht gefunden', 'Diese Adresse existiert nicht oder wurde geändert.', 'Zur Startseite'],
  fr: ['Page introuvable', 'Cette adresse n’existe pas ou a changé.', 'Retour à l’accueil'],
  en: ['Page not found', 'This address does not exist or has changed.', 'Back to home'],
};
export default function NotFoundPage() {
  const { lang: param } = useParams();
  const lang = supportedLanguages.includes(param) ? param : 'es';
  const [title, description, action] = messages[lang];
  useDocumentHead({ title: `${title} | María Ángeles Capas`, description, lang, robots: 'noindex, follow' });
  return (
    <main className="interior-page error-page mx-auto max-w-3xl px-6 py-32">
      <p className="text-blue-600">404</p>
      <h1 className="font-serif text-4xl my-5">{title}</h1>
      <p className="mb-6">{description}</p>
      <Link className="editorial-button" to={`/${lang}`}>{action}</Link>
    </main>
  );
}
