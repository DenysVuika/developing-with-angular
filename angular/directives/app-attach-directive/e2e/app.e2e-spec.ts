import { AppAttachDirectivePage } from './app.po';

describe('app-attach-directive App', () => {
  let page: AppAttachDirectivePage;

  beforeEach(() => {
    page = new AppAttachDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
