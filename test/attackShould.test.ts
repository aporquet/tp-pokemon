import { Pokemon } from "../src/pokemon";
import { Attack } from "../src/attack";

const sismicToss = new Attack('Sismic Toss', 14);
const nightShade = new Attack('Night Shade', 19);
const endeavour = new Attack('Endeavour', 100);

test('decrease_pv_of_the_opposant', () => {
    const evoli = new Pokemon("evoli", 34, false, true, false, 100, [sismicToss, nightShade]);
    const tadmorv = new Pokemon("tadmorv", 2, false, true, false, 100, [sismicToss, endeavour]);
    evoli.attack(tadmorv, evoli.attacks[1])
    expect(tadmorv.pv).toBe(81);
  });
