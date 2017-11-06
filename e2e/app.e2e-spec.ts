import { MyFoodPage } from './app.po';

describe('meat App', function() {
  let page: MyFoodPage;

  beforeEach(() => {
    page = new MyFoodPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('mt works!');
  });
});
