import { DependencyInjectionPage } from './app.po';

describe('dependency-injection App', () => {
  let page: DependencyInjectionPage;

  beforeEach(() => {
    page = new DependencyInjectionPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
