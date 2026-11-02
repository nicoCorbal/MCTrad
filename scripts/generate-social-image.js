import { launchBrowser } from './browser.js';
import { fileURLToPath } from 'node:url';

const browser = await launchBrowser();
try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 630, deviceScaleFactor: 1 });
  await page.setContent(`<!doctype html><html lang="es"><meta charset="utf-8"><style>
    *{box-sizing:border-box}body{margin:0;width:1200px;height:630px;background:#f4f7fc;color:#122037;font-family:Arial,sans-serif;padding:72px 86px;position:relative}
    .line{height:6px;width:78px;background:#2563eb;margin-bottom:30px}.name{font-family:Georgia,serif;font-size:59px;letter-spacing:-2px;margin:0 0 24px}
    .service{font-size:34px;line-height:1.4;margin:0;color:#33455e}.languages{font-size:26px;color:#2563eb;margin:20px 0 44px}
    .credentials{display:flex;gap:16px}.credentials span{border:1px solid #c5d0e0;border-radius:30px;padding:13px 22px;font-size:19px}
    footer{position:absolute;bottom:47px;left:86px;right:86px;border-top:1px solid #d3dce9;padding-top:20px;color:#526079;font-size:21px;display:flex;justify-content:space-between}
  </style><div class="line"></div><h1 class="name">María Ángeles Capas</h1><p class="service">Traducción jurada · Beglaubigte Übersetzung</p><p class="languages">Alemán ↔ Español &nbsp;·&nbsp; Deutsch ↔ Spanisch</p><div class="credentials"><span>MAEC · España</span><span>OLG Köln · Deutschland</span></div><footer><span>Ourense · Servicio online</span><span>mariaangelescapas.com</span></footer></html>`);
  await page.screenshot({ path: fileURLToPath(new URL('../public/og-image.png', import.meta.url)), type: 'png' });
  console.log('Generated public/og-image.png (1200 × 630)');
} finally {
  await browser.close();
}
