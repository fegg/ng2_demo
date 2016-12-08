import { Ng2StartPage } from './app.po';

describe('ng2-start App', function() {
  let page: Ng2StartPage;

  beforeEach(() => {
    page = new Ng2StartPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
