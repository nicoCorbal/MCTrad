import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import SEO from '../components/SEO';
import {
  fadeInUp,
  staggerContainer,
  staggerItem,
} from '../components/animations/MotionComponents';

function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle');
  const [focusedField, setFocusedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          ...formData,
          from_name: formData.name,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const inputClasses = (fieldName) => `
    w-full px-4 py-3 border rounded-lg transition-all duration-300 outline-none
    ${focusedField === fieldName
      ? 'border-blue-500 ring-2 ring-blue-100'
      : 'border-gray-300 hover:border-gray-400'
    }
  `;

  return (
    <>
      <SEO page="contact" />
      <main className="min-h-screen bg-white overflow-hidden">

      {/* Hero */}
      <motion.section
        className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-gray-50 to-white"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.div className="max-w-2xl" variants={staggerContainer}>
            <motion.h1
              className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-4"
              variants={fadeInUp}
            >
              {t('contactPage.title')}
            </motion.h1>
            <motion.p
              className="text-lg text-gray-600 leading-relaxed"
              variants={fadeInUp}
            >
              {t('contactPage.introduction')}
            </motion.p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Form */}
      <motion.section
        className="py-12 md:py-20 lg:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-2xl mx-auto px-6">

          <AnimatePresence mode="wait">
            {status === 'success' ? (
              <motion.div
                key="success"
                className="text-center py-16"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
              >
                <motion.div
                  className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2, type: "spring" }}
                >
                  <motion.svg
                    className="w-8 h-8 text-green-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </motion.svg>
                </motion.div>
                <motion.h2
                  className="font-serif text-2xl font-semibold text-gray-900 mb-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  {t('contactPage.form.successTitle') || 'Mensaje enviado'}
                </motion.h2>
                <motion.p
                  className="text-gray-600 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  {t('contactPage.form.successMessage') || 'Gracias por contactar. Te responderé en menos de 24 horas.'}
                </motion.p>
                <motion.button
                  onClick={() => setStatus('idle')}
                  className="text-blue-600 font-medium hover:underline"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {t('contactPage.form.sendAnother') || 'Enviar otro mensaje'}
                </motion.button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="space-y-6"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
              >
                <motion.div
                  className="grid md:grid-cols-2 gap-6"
                  variants={staggerItem}
                >
                  <div>
                    <motion.label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    >
                      {t('contactPage.form.name') || 'Nombre'}
                    </motion.label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('name')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('name')}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      {t('contactPage.form.email') || 'Email'}
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('email')}
                      onBlur={() => setFocusedField(null)}
                      className={inputClasses('email')}
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contactPage.form.subject') || 'Asunto'}
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('subject')}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses('subject')}
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <motion.div variants={staggerItem}>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contactPage.form.message') || 'Mensaje'}
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    rows={6}
                    required
                    value={formData.message}
                    onChange={handleChange}
                    onFocus={() => setFocusedField('message')}
                    onBlur={() => setFocusedField(null)}
                    className={`${inputClasses('message')} resize-none`}
                    whileFocus={{ scale: 1.01 }}
                  />
                </motion.div>

                <AnimatePresence>
                  {status === 'error' && (
                    <motion.div
                      className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                    >
                      {t('contactPage.form.error') || 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed relative overflow-hidden"
                  variants={staggerItem}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <AnimatePresence mode="wait">
                    {status === 'loading' ? (
                      <motion.span
                        key="loading"
                        className="flex items-center justify-center gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.span
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                        {t('contactPage.form.sending') || 'Enviando...'}
                      </motion.span>
                    ) : (
                      <motion.span
                        key="submit"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        {t('contactPage.form.submit') || 'Enviar mensaje'}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>

        </div>
      </motion.section>

      {/* Guarantees */}
      <motion.section
        className="py-12 md:py-20 lg:py-28 bg-blue-600"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="max-w-4xl mx-auto px-6">
          <motion.div className="grid grid-cols-3 gap-4 md:gap-8 text-center" variants={staggerContainer}>
            {[
              { value: '24h', label: t('contactPage.guarantees.responseTime') },
              { value: '100%', label: t('contactPage.guarantees.confidentiality') },
              { value: '5★', label: t('contactPage.guarantees.professionalService') }
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={staggerItem}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <motion.p
                  className="font-serif text-2xl md:text-4xl text-white mb-1 md:mb-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                >
                  {item.value}
                </motion.p>
                <p className="text-[10px] md:text-xs text-blue-200 uppercase tracking-wide leading-tight">
                  {item.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      </main>
    </>
  );
}

export default ContactPage;
