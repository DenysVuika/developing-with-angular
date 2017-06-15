import { BasicComponentsPage } from './app.po';

describe('basic-components App', () => {
  let page: BasicComponentsPage;

  beforeEach(() => {
    page = new BasicComponentsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
