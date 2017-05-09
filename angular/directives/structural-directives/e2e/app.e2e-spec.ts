import { StructuralDirectivesPage } from './app.po';

describe('structural-directives App', () => {
  let page: StructuralDirectivesPage;

  beforeEach(() => {
    page = new StructuralDirectivesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
