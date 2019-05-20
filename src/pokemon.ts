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
        public ko: boolean = false
    ){}

    getFirstAttackant(p1:Pokemon, p2:Pokemon): Pokemon{
        this.checkParalyse(p1);
        this.checkParalyse(p2);
        if(p1.speed > p2.speed){
            return p1; 
        }
        return p2;
    }

    checkParalyse(p: Pokemon){
        if(p.quickFeet == false && p.isParalyse == true) p.speed = p.speed/2
    }

    checkChoiceScarf(p: Pokemon){
        if(p.choiceScarf === true) p.speed = p.speed * 1.5
    }

    attack(p: Pokemon, attack: Attack): void {
        p.pv = p.pv -  attack.dammage;
        if(p.pv === 0){
            p.ko = true;
        }
    }

}
