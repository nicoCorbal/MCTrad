import React from 'react';
import { useTranslation } from 'react-i18next';

function ContactPage() {
  const { t } = useTranslation();

  const emailAddress = 'capaslopez@gmail.com';
  const whatsappNumber = '34600757000';

  return (
    <div className="min-h-screen bg-stone-50">

      {/* Hero Section */}
      <section className="bg-blue-600">
        <div className="container mx-auto px-6 lg:px-12 pt-28 pb-12 md:pt-32 md:pb-16">
          <div className="flex items-center gap-12 lg:gap-16">
            <div className="flex-1">
              <h1 className="font-serif font-light text-5xl md:text-6xl lg:text-7xl text-white leading-tight">
                {t('contactPage.title')}
              </h1>
              <p className="text-blue-200 text-sm tracking-widest uppercase mt-6">
                {t('contactPage.introduction')}
              </p>
            </div>

            {/* Hero Illustration */}
            <div className="hidden lg:flex flex-shrink-0">
              <img
                src="/ilu3.svg"
                alt="Contact illustration"
                className="w-72 xl:w-80 h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="container mx-auto px-6 lg:px-12 py-16 md:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 mb-16 md:mb-32">

            {/* Email Contact */}
            <a
              href={`mailto:${emailAddress}`}
              className="bg-white border border-stone-200 p-6 md:p-10 hover:border-blue-200 transition-colors group"
            >
              <div className="mb-4 md:mb-6">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>

              <h2 className="font-serif text-xl md:text-2xl text-zinc-800 mb-3 md:mb-4">
                {t('contactPage.email.heading')}
              </h2>

              <p className="text-blue-500 text-base md:text-lg font-medium mb-3 md:mb-4 break-all">
                {emailAddress}
              </p>

              <p className="text-zinc-500 leading-relaxed mb-4 md:mb-6 text-sm md:text-base font-medium">
                {t('contactPage.email.description')}
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-blue-500 border-b border-blue-500 group-hover:text-blue-600 group-hover:border-blue-600 transition-colors font-medium">
                <span>{t('common.sendEmail')}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

            {/* WhatsApp Contact */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white border border-stone-200 p-6 md:p-10 hover:border-blue-200 transition-colors group"
            >
              <div className="mb-4 md:mb-6">
                <svg className="w-10 h-10 md:w-12 md:h-12 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </div>

              <h2 className="font-serif text-xl md:text-2xl text-zinc-800 mb-3 md:mb-4">
                {t('contactPage.whatsapp.heading')}
              </h2>


              <p className="text-zinc-500 leading-relaxed mb-4 md:mb-6 text-sm md:text-base font-medium">
                {t('contactPage.whatsapp.description')}
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-blue-500 border-b border-blue-500 group-hover:text-blue-600 group-hover:border-blue-600 transition-colors font-medium">
                <span>{t('common.openWhatsApp')}</span>
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </a>

          </div>

          {/* Guarantees Section */}
          <div className="bg-white border-l-4 border-blue-500 p-6 md:p-12">
            <h3 className="text-sm tracking-widest uppercase text-blue-500 mb-6 md:mb-8 font-semibold">
              {t('common.badges.guarantees')}
            </h3>

            <h2 className="font-serif text-2xl md:text-4xl text-zinc-800 mb-4 md:mb-6">
              {t('contactPage.guarantees.title')}
            </h2>

            <p className="text-zinc-500 leading-relaxed mb-8 md:mb-12 text-base md:text-lg font-medium">
              {t('contactPage.guarantees.description')}
            </p>

            <div className="grid grid-cols-3 gap-4 md:gap-8">
              <div className="text-center">
                <div className="text-2xl md:text-4xl font-serif font-light text-blue-500 mb-1 md:mb-2">24h</div>
                <div className="text-xs md:text-sm text-zinc-500 font-medium">{t('contactPage.guarantees.responseTime')}</div>
              </div>

              <div className="text-center">
                <div className="text-2xl md:text-4xl font-serif font-light text-blue-500 mb-1 md:mb-2">100%</div>
                <div className="text-xs md:text-sm text-zinc-500 font-medium">{t('contactPage.guarantees.confidentiality')}</div>
              </div>

              <div className="text-center">
                <div className="text-2xl md:text-4xl font-serif font-light text-blue-500 mb-1 md:mb-2">5★</div>
                <div className="text-xs md:text-sm text-zinc-500 font-medium">{t('contactPage.guarantees.professionalService')}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default ContactPage;
