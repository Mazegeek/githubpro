import { GithubprosearchPage } from './app.po';

describe('githubprosearch App', function() {
  let page: GithubprosearchPage;

  beforeEach(() => {
    page = new GithubprosearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
