import { StandardPipesPage } from './app.po';

describe('standard-pipes App', () => {
  let page: StandardPipesPage;

  beforeEach(() => {
    page = new StandardPipesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
