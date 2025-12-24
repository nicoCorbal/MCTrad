import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useDocumentHead } from '../hooks/useDocumentHead';
import { SITE_URL } from '../config/seo';

/**
 * Breadcrumbs component with JSON-LD structured data
 * Improves navigation and SEO with BreadcrumbList schema
 *
 * @param {Object} props
 * @param {Array} props.items - Array of breadcrumb items [{label, href}]
 */
function Breadcrumbs({ items = [] }) {

  // Generate BreadcrumbList schema
  const breadcrumbSchema = useMemo(() => {
    if (items.length === 0) return null;

    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.label,
        "item": item.href ? `${SITE_URL}${item.href}` : undefined,
      })),
    };
  }, [items]);

  // Inject breadcrumb schema
  useDocumentHead({
    jsonLd: breadcrumbSchema,
  });

  if (items.length === 0) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="bg-gray-50 border-b border-gray-100"
    >
      <div className="max-w-6xl mx-auto px-6 py-3">
        <ol className="flex items-center flex-wrap gap-2 text-sm" itemScope itemType="https://schema.org/BreadcrumbList">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li
                key={index}
                className="flex items-center"
                itemProp="itemListElement"
                itemScope
                itemType="https://schema.org/ListItem"
              >
                {index > 0 && (
                  <svg
                    className="w-4 h-4 text-gray-400 mx-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}

                {isLast || !item.href ? (
                  <span
                    className={`${isLast ? 'text-gray-900 font-medium' : 'text-gray-600'}`}
                    itemProp="name"
                    aria-current={isLast ? 'page' : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.href}
                    className="text-gray-600 hover:text-blue-600 transition-colors"
                    itemProp="item"
                  >
                    <span itemProp="name">{item.label}</span>
                  </Link>
                )}

                <meta itemProp="position" content={String(index + 1)} />
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}

export default Breadcrumbs;
