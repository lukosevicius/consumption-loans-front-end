import { LoansAdminPage } from './app.po';

describe('loans-admin App', function() {
  let page: LoansAdminPage;

  beforeEach(() => {
    page = new LoansAdminPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
