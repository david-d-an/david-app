import { HttpTestModule } from './http-test.module';

describe('HttpTestModule', () => {
  let httpTestModule: HttpTestModule;

  beforeEach(() => {
    httpTestModule = new HttpTestModule();
  });

  it('should create an instance', () => {
    expect(httpTestModule).toBeTruthy();
  });
});
