import { Pokemon } from "./pokemon";

export class Match{

    constructor(
        public p1: Pokemon,
        public p2: Pokemon,
        public attacks: Pokemon[]
    ){}
    
    fight(p1: Pokemon, p2:Pokemon, pilePokemons:Pokemon[]){
        pilePokemons = p1.getOrder(p1, p2, pilePokemons);
        console.log(p1.name + ' combat ' + p2.name);
        p1 = pilePokemons.pop();
        p2 = pilePokemons.pop();
        while(p1.ko === false && p2.ko === false){
                p1.attack(p2, p1.attacks[Math.floor(Math.random() * this.attacks.length)])
                if(p2.pv <= 0){
                    p2.ko = true;
                    return console.log(p2.name+' a perdu');
                }
                console.log(p1.name + ' attaque ' + p2.name);
                console.log('les pv de '+p2.name+' sont a '+ p2.pv);
                let tmp = p1;
                p1=p2;
                p2=tmp;
        }
    }
}