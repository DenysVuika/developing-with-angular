import { AppUploadDirectivePage } from './app.po';

describe('app-upload-directive App', () => {
  let page: AppUploadDirectivePage;

  beforeEach(() => {
    page = new AppUploadDirectivePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
