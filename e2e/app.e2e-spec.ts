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

  it('should display message saying full publication list', () => {
    page.navigateToResearch();
    expect(page.getParagraphText()).toEqual('Full Publication List');
  });

  it('should display message saying development cycle', () => {
    page.navigateToOts();
    expect(page.getParagraphText()).toEqual('Development Cycle');
  });

  it('should display message saying Curriculum Vitae', () => {
    page.navigateToEducation();
    expect(page.getParagraphText()).toEqual('Curriculum Vitae');
  });

});
