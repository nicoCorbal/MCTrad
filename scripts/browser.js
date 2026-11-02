import puppeteer from 'puppeteer';
import { existsSync } from 'node:fs';

export function launchBrowser() {
  const localChrome = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
  const executablePath = process.env.PUPPETEER_EXECUTABLE_PATH ||
    (existsSync(puppeteer.executablePath()) ? puppeteer.executablePath() :
      existsSync(localChrome) ? localChrome : undefined);
  return puppeteer.launch({ executablePath, headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
}
