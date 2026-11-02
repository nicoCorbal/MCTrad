# María Ángeles Capas

Web de traducción jurada en español, alemán, francés e inglés, construida con React y Vite. Las 56 páginas se prerenderizan como HTML estático antes de publicarse en Vercel.

## Desarrollo

Se recomienda Node.js 22. Instale las dependencias con `npm ci` y arranque `npm run dev`. La portada española está en `http://localhost:5173/es`.

El formulario utiliza `VITE_WEB3FORMS_KEY`, configurada en un archivo de entorno local excluido de Git o en el entorno de compilación. No se deben guardar credenciales, archivos `.env` ni la carpeta `.vercel` en el repositorio.

## Comprobaciones

```sh
npm run lint
npm run verify:analytics
npm run verify:content
npm run build
npm run verify:seo
```

`build` genera el sitemap, compila la aplicación y valida las 56 páginas con un navegador. Termina con error si faltan contenido, título, descripción, canonical, enlaces de idioma o FAQ declaradas en el schema. También genera una página 404 con `noindex`.

`verify:seo` comprueba el artefacto de `dist`: inventario, títulos únicos, canonical, hreflang, recursos existentes, enlaces internos y acceso a todas las páginas desde `/es`.

## Rutas y contenido

- `src/config/routes.js` contiene el inventario común de rutas para navegación, sitemap y prerenderizado.
- `src/config/seo.js` contiene los metadatos de cada página e idioma.
- `public/locales/{idioma}/translation.json` contiene los textos generales.
- `public/locales/{idioma}/service-{tipo}.json` contiene cada ficha de documento. Solo se carga la ficha y el idioma necesarios.
- `src/config/business-schema.js` identifica a la profesional y la empresa en Ourense.
- `src/components/OfficialResources.jsx` enlaza las fuentes oficiales relevantes para cada trámite.
- `public/logo.svg`, `public/favicon.svg` y los iconos PNG contienen el monograma `mc.`.
- `public/fonts` contiene las tipografías alojadas localmente y sus licencias OFL.

Al cambiar rutas o contenido, ejecute la secuencia completa de comprobaciones. El sitemap conserva las URL existentes y no inventa fechas de modificación a partir de cada compilación.

## Medición

La propiedad configurada usa el identificador público `G-0VDR7CFGQB`. `page_view` se envía cuando el idioma y el canonical corresponden a la ruta actual. `contact_email_click` mide intención de contacto; `generate_lead` se emite tras una respuesta satisfactoria del formulario. No se envían campos del formulario ni parámetros de consulta. Las visitas a local y a dominios de previsualización no cargan GA4.

La configuración del flujo de GA4 debe concordar con las páginas vistas manuales: compruebe la opción de cambios de página basados en el historial en Medición mejorada. No confunda un clic en email con un presupuesto recibido.

## Publicación

El proyecto es `mc-trad`, del equipo `nicos-projects-65539a5e`, y el dominio canónico es `https://mariaangelescapas.com`.

El flujo existente de GitHub Actions publica `master`. Antes de publicar ejecuta las comprobaciones de código, contenido, medición y SEO. Para una publicación manual desde el artefacto compilado:

```sh
cp vercel.json dist/vercel.json
vercel deploy dist --prod --skip-domain --scope nicos-projects-65539a5e
```

Use el proyecto ya vinculado; compruebe equipo, proyecto y dominio antes de publicar. Una vez validada la URL de ese despliegue, `vercel promote URL_DEL_DESPLIEGUE --scope nicos-projects-65539a5e` asigna el dominio principal.

Los despliegues temporales pueden estar protegidos por Vercel. Para comprobarlos con la autenticación existente:

```sh
vercel curl /es --deployment URL_DEL_DESPLIEGUE --scope nicos-projects-65539a5e
```

No publique tokens ni desactive la protección para realizar comprobaciones.

## Historial SEO

Consulte [SEO y publicación de noviembre de 2026](docs/SEO-2026-11-02.md) para ver el diagnóstico, los cambios, las evidencias, el despliegue y las tareas aplazadas.
