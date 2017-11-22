import { ScrimappPage } from './app.po';

describe('scrimapp App', () => {
  let page: ScrimappPage;

  beforeEach(() => {
    page = new ScrimappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
