import { PureImpurePage } from './app.po';

describe('pure-impure App', () => {
  let page: PureImpurePage;

  beforeEach(() => {
    page = new PureImpurePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
