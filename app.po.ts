import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get('/');
  }

  getText(cssElementMatch : string = 'div#appTitle') {
    return element(by.css(cssElementMatch)).getText();
  }
}
