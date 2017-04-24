import { NuiSitePage } from './app.po';

describe('nui-site App', () => {
  let page: NuiSitePage;

  beforeEach(() => {
    page = new NuiSitePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
