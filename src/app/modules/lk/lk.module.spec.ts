import { LkModule } from './lk.module';

describe('LkModule', () => {
  let lkModule: LkModule;

  beforeEach(() => {
    lkModule = new LkModule();
  });

  it('should create an instance', () => {
    expect(lkModule).toBeTruthy();
  });
});
