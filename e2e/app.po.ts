import { browser, element, by } from 'protractor';

export class MyFoodPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('mt-root h1')).getText();
  }
}
