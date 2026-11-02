import React, { Suspense } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import './i18n/i18n';
import Loader from './components/Loader';
import { initializeAnalytics } from './utils/analytics';

import { prepareInitialPage } from './config/page-loaders';

async function startApp() {
  await prepareInitialPage(window.location.pathname);
  initializeAnalytics();
  createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Suspense fallback={<Loader />}>
        <App />
      </Suspense>
    </React.StrictMode>
  );
}

startApp().catch(error => console.error('Application startup failed', error));
