import React from 'react';
import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
    >
      <div className="flex flex-col items-center">
        {/* Logo animado */}
        <motion.div
          className="relative mb-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Círculos decorativos */}
          <motion.div
            className="absolute -inset-4 rounded-full border border-blue-100"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.2, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -inset-8 rounded-full border border-blue-50"
            animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.1, 0.3] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
          />

          {/* Iniciales */}
          <motion.div
            className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="font-serif text-2xl text-white font-semibold">MA</span>
          </motion.div>
        </motion.div>

        {/* Nombre */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="font-serif text-xl font-semibold text-gray-900">
            María Ángeles Capas
          </h1>
          <p className="text-xs text-gray-500 uppercase tracking-[0.2em] mt-1">
            Traductora Jurada
          </p>
        </motion.div>

        {/* Barra de progreso */}
        <motion.div
          className="mt-8 w-48 h-0.5 bg-gray-100 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            className="h-full bg-blue-600 rounded-full"
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: [0.25, 0.4, 0.25, 1] }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Loader;
