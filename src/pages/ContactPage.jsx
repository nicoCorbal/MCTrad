import React from 'react';
import { useTranslation } from 'react-i18next';

function ContactPage() {
  const { t } = useTranslation();

  // Replace with actual email and WhatsApp number
  const emailAddress = 'tu_email@example.com';
  const whatsappNumber = '1234567890'; // Format: CountryCodePhoneNumber (e.g., 34600123123)

  return (
    <div className="min-h-screen bg-white">
      {/* Page Header - Enhanced */}
      <section className="relative bg-gradient-to-br from-navy-50 via-white to-gold-50/30 py-10 sm:py-12 md:py-16 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-gold-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-navy-500/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-2 sm:px-4 bg-navy-500/10 border border-navy-500/20 mb-4 sm:mb-6 animate-fadeIn">
              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gold-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] text-navy-600">
                {t('contact')}
              </span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-navy-500 mb-4 sm:mb-6 leading-tight animate-fadeIn animation-delay-200 px-4">
              {t('contactPage.title')}
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed mb-6 sm:mb-8 animate-fadeIn animation-delay-400 px-4">
              {t('contactPage.introduction')}
            </p>

            {/* Decorative divider */}
            <div className="flex items-center justify-center my-8 animate-fadeIn animation-delay-600">
              <div className="flex-1 border-t-2 border-gray-300 max-w-xs"></div>
              <div className="w-3 h-3 bg-gold-400 mx-6 rotate-45"></div>
              <div className="flex-1 border-t-2 border-gray-300 max-w-xs"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-10 sm:py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">

              {/* Email Contact Card */}
              <a
                href={`mailto:${emailAddress}`}
                className="group relative bg-white border-2 border-gray-200 p-8 md:p-10 hover:border-navy-500 transition-all duration-300 hover-lift animate-slideUp"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-navy-500 to-navy-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-gray-200 group-hover:border-navy-500/30 transition-colors">
                  <div className="w-16 h-16 bg-navy-50 flex items-center justify-center group-hover:bg-navy-500 transition-colors group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-navy-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-navy-500 group-hover:text-navy-600 transition-colors">
                      {t('contactPage.email.heading')}
                    </h2>
                  </div>
                </div>

                <p className="text-navy-600 text-lg font-bold mb-4 break-all group-hover:text-navy-700 transition-colors">
                  {emailAddress}
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('contactPage.email.description')}
                </p>

                <div className="inline-flex items-center text-navy-500 font-semibold text-sm uppercase tracking-[0.1em] group-hover:text-navy-600 transition-colors">
                  <span>{t('common.sendEmail')}</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>

              {/* WhatsApp Contact Card */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-white border-2 border-gray-200 p-8 md:p-10 hover:border-green-600 transition-all duration-300 hover-lift animate-slideUp animation-delay-200"
              >
                {/* Accent bar */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-green-600 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>

                <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-gray-200 group-hover:border-green-600/30 transition-colors">
                  <div className="w-16 h-16 bg-green-50 flex items-center justify-center group-hover:bg-green-600 transition-colors group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-8 h-8 text-green-600 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-navy-500 group-hover:text-navy-600 transition-colors">
                      {t('contactPage.whatsapp.heading')}
                    </h2>
                  </div>
                </div>

                <p className="text-green-600 text-lg font-bold mb-4 group-hover:text-green-700 transition-colors">
                  +{whatsappNumber}
                </p>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  {t('contactPage.whatsapp.description')}
                </p>

                <div className="inline-flex items-center text-green-600 font-semibold text-sm uppercase tracking-[0.1em] group-hover:text-green-700 transition-colors">
                  <span>{t('common.openWhatsApp')}</span>
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </div>
              </a>
            </div>

            {/* Guarantees Section */}
            <div className="relative bg-gradient-to-br from-navy-50 to-gold-50/30 border-l-4 border-gold-400 p-10 md:p-12 overflow-hidden animate-slideUp animation-delay-400">
              {/* Background decoration */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gold-400/10 rounded-full blur-3xl"></div>

              <div className="max-w-4xl mx-auto relative z-10">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-gold-400/20 border border-gold-400/40 mb-4">
                    <svg className="w-5 h-5 text-gold-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm font-bold uppercase tracking-[0.15em] text-gold-700">{t('common.badges.guarantees')}</span>
                  </div>
                  <h3 className="font-serif text-3xl md:text-4xl font-bold text-navy-500 mb-4">
                    {t('contactPage.guarantees.title')}
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-lg">
                    {t('contactPage.guarantees.description')}
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                  <div className="group bg-white border-2 border-gray-200 p-8 text-center hover:border-gold-400 transition-all duration-300 hover-lift">
                    <div className="text-5xl font-bold font-serif text-navy-500 mb-3 group-hover:text-gold-600 transition-colors">24h</div>
                    <div className="text-sm text-gray-700 font-semibold uppercase tracking-[0.1em]">
                      {t('contactPage.guarantees.responseTime')}
                    </div>
                  </div>

                  <div className="group bg-white border-2 border-gray-200 p-8 text-center hover:border-gold-400 transition-all duration-300 hover-lift">
                    <div className="text-5xl font-bold font-serif text-navy-500 mb-3 group-hover:text-gold-600 transition-colors">100%</div>
                    <div className="text-sm text-gray-700 font-semibold uppercase tracking-[0.1em]">
                      {t('contactPage.guarantees.confidentiality')}
                    </div>
                  </div>

                  <div className="group bg-white border-2 border-gray-200 p-8 text-center hover:border-gold-400 transition-all duration-300 hover-lift">
                    <div className="text-5xl font-bold font-serif text-navy-500 mb-3 group-hover:text-gold-600 transition-colors">5★</div>
                    <div className="text-sm text-gray-700 font-semibold uppercase tracking-[0.1em]">
                      {t('contactPage.guarantees.professionalService')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;
