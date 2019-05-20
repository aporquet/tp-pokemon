import { Pokemon } from './pokemon';
import { Attack } from './attack';
import { Match } from './match';

const sismicToss = new Attack('Sismic Toss', 14);
const nightShade = new Attack('Night Shade', 19);
const endeavour = new Attack('Endeavour', 100);

const evoli = new Pokemon("evoli", 34, false, true, false, 100, [sismicToss, nightShade], false);
const tadmorv = new Pokemon("tadmorv", 2, false, true, false, 100, [sismicToss, nightShade], false);
const pilePokemon:Pokemon[] = new Array<Pokemon>();

let combat = new Match(evoli, tadmorv, pilePokemon);
combat.fight(evoli, tadmorv, pilePokemon)

