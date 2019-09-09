import {browser, by, element, protractor} from 'protractor';

export class AppPage {
  public EC = protractor.ExpectedConditions;
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('app-root h1')).getText() as Promise<string>;
  }
  getPoints(){
    return element(by.cssContainingText('div', 'Points')).$('span').getText();
  }
  getPlus1Button()
  {
    return element(by.cssContainingText('button', 'Plus 1'));
  }
  getResertButton()
  {
    return element(by.cssContainingText('button','reset'));
  }
}
