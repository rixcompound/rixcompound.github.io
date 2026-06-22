import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Dynamically initialize Google Analytics if VITE_GA_MEASUREMENT_ID is provided
const gaId = (import.meta as any).env?.VITE_GA_MEASUREMENT_ID;
if (gaId) {
  const scriptEl = document.createElement('script');
  scriptEl.async = true;
  scriptEl.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
  document.head.appendChild(scriptEl);

  const win = window as any;
  win.dataLayer = win.dataLayer || [];
  win.gtag = function gtag() {
    win.dataLayer.push(arguments);
  };
  win.gtag('js', new Date());
  win.gtag('config', gaId, {
    page_path: window.location.pathname,
    send_page_view: true
  });
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

