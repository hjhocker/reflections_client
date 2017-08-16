import { browser, element, by } from 'protractor';

export class ReflectionsClientPage {
  navigateTo() {
    return browser.get('/');
  }

  navigateToResearch() {
    return browser.get('/previous-research');
  }

  navigateToEducation() {
    return browser.get('/education');
  }

  navigateToOts() {
    return browser.get('/ots');
  }

  getParagraphText() {
    return element.all(by.css('app-root h1')).first().getText();
  }
}
