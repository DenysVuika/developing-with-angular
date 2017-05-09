import { DirectiveExamplePage } from './app.po';

describe('directive-example App', () => {
  let page: DirectiveExamplePage;

  beforeEach(() => {
    page = new DirectiveExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
