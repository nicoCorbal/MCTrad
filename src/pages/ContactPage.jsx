import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

function ContactPage() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error

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
          access_key: 'TU_ACCESS_KEY_AQUI', // Reemplazar con tu key de web3forms.com
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

  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="max-w-2xl">
            <h1 className="font-serif text-4xl md:text-5xl font-semibold text-gray-900 mb-4">
              {t('contactPage.title')}
            </h1>
            <p className="text-lg text-gray-600 leading-relaxed">
              {t('contactPage.introduction')}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 md:py-28">
        <div className="max-w-2xl mx-auto px-6">

          {status === 'success' ? (
            <div className="text-center py-16">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="font-serif text-2xl font-semibold text-gray-900 mb-2">
                {t('contactPage.form.successTitle') || 'Mensaje enviado'}
              </h2>
              <p className="text-gray-600 mb-8">
                {t('contactPage.form.successMessage') || 'Gracias por contactar. Te responderé en menos de 24 horas.'}
              </p>
              <button
                onClick={() => setStatus('idle')}
                className="text-blue-600 font-medium hover:underline"
              >
                {t('contactPage.form.sendAnother') || 'Enviar otro mensaje'}
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contactPage.form.name') || 'Nombre'}
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    {t('contactPage.form.email') || 'Email'}
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contactPage.form.subject') || 'Asunto'}
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  {t('contactPage.form.message') || 'Mensaje'}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={6}
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                />
              </div>

              {status === 'error' && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-600 text-sm">
                  {t('contactPage.form.error') || 'Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.'}
                </div>
              )}

              <button
                type="submit"
                disabled={status === 'loading'}
                className="w-full py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === 'loading'
                  ? (t('contactPage.form.sending') || 'Enviando...')
                  : (t('contactPage.form.submit') || 'Enviar mensaje')
                }
              </button>
            </form>
          )}

        </div>
      </section>

      {/* Guarantees */}
      <section className="py-20 md:py-28 bg-blue-600">
        <div className="max-w-4xl mx-auto px-6">
          <div className="grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="font-serif text-3xl md:text-4xl text-white mb-2">24h</p>
              <p className="text-xs text-blue-200 uppercase tracking-wide">
                {t('contactPage.guarantees.responseTime')}
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-white mb-2">100%</p>
              <p className="text-xs text-blue-200 uppercase tracking-wide">
                {t('contactPage.guarantees.confidentiality')}
              </p>
            </div>
            <div>
              <p className="font-serif text-3xl md:text-4xl text-white mb-2">5★</p>
              <p className="text-xs text-blue-200 uppercase tracking-wide">
                {t('contactPage.guarantees.professionalService')}
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactPage;
