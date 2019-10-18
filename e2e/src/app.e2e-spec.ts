import { AppPage } from './app.po';
import { browser, logging, element, Browser } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Demo Blog in Top-left navbar', () => {
    page.navigateTo();
    expect(page.getNavBrandName().getText()).toEqual('Demo Blog');
  });

  it('should route to home page when Demo Blog clicked', () => {
    page.getNavBrandName().click();
    page.navigateTo();
    expect(browser.getCurrentUrl()).toEqual(browser.baseUrl+'/blogs');
  });

  it('should display Add new Blog', () => {
    page.navigateTo();
    expect(page.getAddNewPostButton().getText()).toEqual('Add new Post');
  });

  it('should route to /create-blog when Add new Blog clicked', () => {
    page.navigateTo();
    page.getAddNewPostButton().click();
    expect(page.getAddBlogTitleText()).toEqual('Create Blog');
  });

  it('should display More...', () => {
    page.navigateTo();
    expect(page.getMoreButton().getText()).toEqual('More...');
  });

  it('should route to /create-blog when Add new Blog clicked', () => {
    page.navigateTo();
    page.getMoreButton().click();
    //expect(browser.getCurrentUrl()).toMatch('http://localhost:4200/blog-details/1744');

  });
  
});
