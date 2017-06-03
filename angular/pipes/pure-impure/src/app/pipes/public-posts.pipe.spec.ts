import { PublicPostsPipe } from './public-posts.pipe';

describe('PublicPostsPipe', () => {
  it('create an instance', () => {
    const pipe = new PublicPostsPipe();
    expect(pipe).toBeTruthy();
  });
});
