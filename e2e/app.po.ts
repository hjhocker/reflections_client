import { browser, element, by } from 'protractor';

export class ReflectionsClientPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToResearch() {
    return browser.get('/previous-research');
  }

  navigateToOts() {
    return browser.get('/ots');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
