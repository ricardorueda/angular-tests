import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root .home-link')).getText() as Promise<string>;
  }

  getFooterText() {
    return element(by.id('footer')).getText() as Promise<string>;
  }
}
