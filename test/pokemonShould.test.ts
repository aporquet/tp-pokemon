import { Pokemon } from '../src/pokemon';
import { Attack } from '../src/attack';

const sismicToss = new Attack('Sismic Toss', 14);
const nightShade = new Attack('Night Shade', 19);
const endeavour = new Attack('Endeavour', 100);

test('return_name_of_the_pokemon', () => {
    const evoli = new Pokemon("evoli", 2, false, true, false, 100, [sismicToss, nightShade], false);
    expect(evoli.name).toBe("evoli");
  });

test('be_the_first_attackant_if_his_speed_is_greater', () => {
    const evoli = new Pokemon("evoli", 34, false, true, false, 100, [sismicToss, nightShade], false);
    const tadmorv = new Pokemon("tadmorv", 2, false, true, false, 100, [sismicToss, nightShade], false);
    expect(evoli.getFirstAttackant(evoli, tadmorv)).toEqual(evoli);
  });

test('had_a_half_of_his_speed_property_if_his_is_paralysed_and_he_had_not_quick_feet', () => {
    const evoli = new Pokemon("evoli", 4, true, false, true, 100, [sismicToss, nightShade], false);
    expect(evoli.checkChoiceScarf(evoli));
    expect(evoli.speed).toBe(4*1.5);
  }); 

test('had_a_speed_multiply_by_one_and_a_half_if_he_had_ChoiceScarf', () => {
    const evoli = new Pokemon("evoli", 4, true, false, false, 100, [sismicToss, nightShade], false);
    const tadmorv = new Pokemon("tadmorv", 3, false, true, false, 100, [sismicToss, nightShade], false);
    expect(evoli.getFirstAttackant(evoli, tadmorv)).toEqual(tadmorv);
    expect(evoli.speed).toBe(2)
  }); 

test('be_ko_if_his_pv_are_null', () => {
    const evoli = new Pokemon("evoli", 34, false, true, false, 100, [sismicToss, nightShade], false);
    const tadmorv = new Pokemon("tadmorv", 2, false, true, false, 100, [sismicToss, endeavour], false);
    tadmorv.attack(evoli, tadmorv.attacks[1])
    expect(evoli.pv).toBe(0);
  });
