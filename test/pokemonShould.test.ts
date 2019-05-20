import { Pokemon } from '../src/pokemon';

test('returnNameOfPokemon', () => {
    const evoli = new Pokemon("evoli")
    expect(evoli.name).toBe("evoli");
  });