import { FilterPipe } from './filter.pipe';

describe('FilterPipe', () => {
  it('help', () => {
    const pipe = new FilterPipe();
    expect(pipe).toBeTruthy();
  });
});
