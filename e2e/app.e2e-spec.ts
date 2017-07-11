import { ReflectionsClientPage } from './app.po';

describe('reflections-client App', () => {
  let page: ReflectionsClientPage;

  beforeEach(() => {
    page = new ReflectionsClientPage();
  });

  it('should display message saying employment history', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Employment History');
  });
});
