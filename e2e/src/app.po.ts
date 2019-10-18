import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }


  getNavBrandName(){
    return element(by.css('app-root [routerlink="/"]'));
  }

  getAddNewPostButton(){
    return element(by.css('app-blogs [routerlink="/create-blog"]'));
  }


  getAddBlogTitleText(){
    return element(by.css('app-blog-form h1')).getText() as Promise<string>;
  }

  getMoreButton(){
    return element.all(by.className('more')).first();
  }
}
