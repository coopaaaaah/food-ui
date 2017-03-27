import { FoodUiPage } from './app.po';

describe('foods-ui App', () => {
  let page: FoodUiPage;

  beforeEach(() => {
    page = new FoodUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
