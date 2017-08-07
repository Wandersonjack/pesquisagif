import { ProcuragifPage } from './app.po';

describe('procuragif App', () => {
  let page: ProcuragifPage;

  beforeEach(() => {
    page = new ProcuragifPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
