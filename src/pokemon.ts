import { Attack } from "./attack";

export class Pokemon{
  
    constructor(
        public name: string,
        public speed: number,
        public isParalyse: boolean,
        public quickFeet: boolean,
        public choiceScarf: boolean,
        public pv: number,
        public attacks: Attack[],
        public ko: boolean,
    ){}

    getFirstAttackant(p1:Pokemon, p2:Pokemon): Pokemon{
        this.checkParalyseAndQuickFeet(p1);
        this.checkParalyseAndQuickFeet(p2);
        this.checkChoiceScarf(p1);
        this.checkChoiceScarf(p2);
        if(p1.speed >= p2.speed){
            return p1; 
        }
        return p2;
    }

    getOrder(p1:Pokemon, p2:Pokemon, pilePokemons:Pokemon[]){
        if(this.getFirstAttackant(p1,p2) == p1){
            pilePokemons.push(p1,p2);
        }
        else{
            pilePokemons.push(p2,p1);
        }
        return pilePokemons
    }

    checkParalyseAndQuickFeet(p: Pokemon){
        if(p.quickFeet == false && p.isParalyse == true) p.speed = p.speed/2
    }

    checkChoiceScarf(p: Pokemon){
        if(p.choiceScarf === true) p.speed = p.speed * 1.5
    }

    attack(p: Pokemon, attack: Attack): void {
        p.pv = p.pv -  attack.dammage;
    }

}
