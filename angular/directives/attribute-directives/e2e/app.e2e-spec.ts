import { AttributeDirectivesPage } from './app.po';

describe('attribute-directives App', () => {
  let page: AttributeDirectivesPage;

  beforeEach(() => {
    page = new AttributeDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
