"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Pokemon = /** @class */ (function () {
    function Pokemon(name, speed, isParalyse, quickFeet, choiceScarf, pv, attacks, ko) {
        this.name = name;
        this.speed = speed;
        this.isParalyse = isParalyse;
        this.quickFeet = quickFeet;
        this.choiceScarf = choiceScarf;
        this.pv = pv;
        this.attacks = attacks;
        this.ko = ko;
    }
    Pokemon.prototype.getFirstAttackant = function (p1, p2) {
        this.checkParalyseAndQuickFeet(p1);
        this.checkParalyseAndQuickFeet(p2);
        this.checkChoiceScarf(p1);
        this.checkChoiceScarf(p2);
        if (p1.speed >= p2.speed) {
            return p1;
        }
        return p2;
    };
    Pokemon.prototype.getOrder = function (p1, p2, pilePokemons) {
        if (this.getFirstAttackant(p1, p2) == p1) {
            pilePokemons.push(p1, p2);
        }
        else {
            pilePokemons.push(p2, p1);
        }
        return pilePokemons;
    };
    Pokemon.prototype.checkParalyseAndQuickFeet = function (p) {
        if (p.quickFeet == false && p.isParalyse == true)
            p.speed = p.speed / 2;
    };
    Pokemon.prototype.checkChoiceScarf = function (p) {
        if (p.choiceScarf === true)
            p.speed = p.speed * 1.5;
    };
    Pokemon.prototype.attack = function (p, attack) {
        p.pv = p.pv - attack.dammage;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
