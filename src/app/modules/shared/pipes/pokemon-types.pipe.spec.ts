import { PokemonTypesPipe } from './pokemon-types.pipe';

describe('PokemonTypesPipe', () => {
  it('create an instance', () => {
    const pipe = new PokemonTypesPipe();
    expect(pipe).toBeTruthy();
  });
});
