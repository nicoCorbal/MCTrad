import { useEffect } from 'react';
import { businessSchemas } from '../config/business-schema';

export default function StructuredData() {
  useEffect(() => {
    const scripts = businessSchemas.map(schema => {
      const id = `structured-data-${schema['@type'].toLowerCase()}`;
      const script = document.getElementById(id) || document.createElement('script');
      script.id = id;
      script.type = 'application/ld+json';
      script.textContent = JSON.stringify(schema);
      document.head.appendChild(script);
      return script;
    });
    return () => scripts.forEach(script => script.remove());
  }, []);
  return null;
}
