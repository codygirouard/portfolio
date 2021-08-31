import puppeteer from 'puppeteer';
import '@testing-library/jest-dom';

const delay = (time: number) => {
  return new Promise(function (resolve) {
    setTimeout(resolve, time);
  });
};

const clickLink = async (page: puppeteer.Page, innerText: string) => {
  await page.evaluate((query) => {
    const elements = [...document.querySelectorAll('a')];
    const targetElement = elements.filter((e) =>
      e.innerText.includes(query)
    )[0];
    targetElement && targetElement.click();
  }, innerText);
};

describe('Portfolio E2E test', () => {
  let browser: puppeteer.Browser;
  let page: puppeteer.Page;
  jest.setTimeout(12000);

  beforeAll(async () => {
    browser = await puppeteer.launch();
    page = await browser.newPage();
    await page.addStyleTag({
      content: '* {scroll-behavior: auto !important;}',
    });
  });

  it('starts at the loading screen', async () => {
    await page.goto('https://codygirouard.codes/');
    await page.waitForSelector('.loading-screen');
    await page.waitForSelector('.intro');
  });

  it('gets past loading screen', async () => {
    await page.waitForSelector('.intro');
  });

  it('navigates to contact section using nav link', async () => {
    let opacity = await page.$eval('.contact', (elem) => {
      return window.getComputedStyle(elem).getPropertyValue('opacity');
    });
    expect(opacity).toBe('0');

    await clickLink(page, 'Contact');
    await delay(750);

    opacity = await page.$eval('.contact', (elem) => {
      return window.getComputedStyle(elem).getPropertyValue('opacity');
    });
    expect(opacity).not.toBe('0');
  });

  it('denton forums link correctly redirects website', async () => {
    await page.evaluate((query) => {
      const elements = [...document.querySelectorAll('a')];
      const targetElement = elements.filter((e) =>
        e.innerText.includes(query)
      )[0];
      targetElement && targetElement.click();
    }, 'Projects');

    await clickLink(page, 'Denton Forums');

    await page.waitForNavigation();
    expect(page.url()).toBe('https://www.dentonforums.com/');
  });

  afterAll(() => browser.close());
});
