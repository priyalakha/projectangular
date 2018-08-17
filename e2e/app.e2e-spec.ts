import { RentAHousePage } from './app.po';

describe('rent-a-house App', function() {
  let page: RentAHousePage;

  beforeEach(() => {
    page = new RentAHousePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
