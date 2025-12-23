import React from 'react';
import { motion } from 'framer-motion';

const EmailButton = () => {
  const email = 'capaslopez@gmail.com';
  const subject = encodeURIComponent('Solicitud de presupuesto - Traducción jurada');
  const body = encodeURIComponent('Hola,\n\nMe gustaría solicitar presupuesto para una traducción jurada.\n\nAdjunto el documento a traducir.\n\nGracias.');
  const mailtoUrl = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <motion.a
      href={mailtoUrl}
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50"
      initial={{ opacity: 0, scale: 0.8, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Enviar email"
    >
      {/* Versión móvil: solo icono */}
      <div className="md:hidden w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-lg">
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
        </svg>
      </div>
      {/* Versión desktop: icono + texto */}
      <div className="hidden md:flex items-center gap-3 bg-white hover:bg-gray-50 text-gray-900 pl-3 pr-5 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center shadow-md">
          <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
        </div>
        <div className="flex flex-col pr-1">
          <span className="font-semibold text-sm leading-tight">Pedir presupuesto</span>
          <span className="text-xs text-gray-500">Respuesta en 24h</span>
        </div>
      </div>
    </motion.a>
  );
};

export default EmailButton;
