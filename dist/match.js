"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Match = /** @class */ (function () {
    function Match(p1, p2, attacks) {
        this.p1 = p1;
        this.p2 = p2;
        this.attacks = attacks;
    }
    Match.prototype.fight = function (p1, p2, pilePokemons) {
        pilePokemons = p1.getOrder(p1, p2, pilePokemons);
        console.log(p1.name + ' combat ' + p2.name);
        p1 = pilePokemons.pop();
        p2 = pilePokemons.pop();
        while (p1.ko === false && p2.ko === false) {
            p1.attack(p2, p1.attacks[Math.floor(Math.random() * this.attacks.length)]);
            if (p2.pv <= 0) {
                p2.ko = true;
                return console.log(p2.name + ' a perdu');
            }
            console.log(p1.name + ' attaque ' + p2.name);
            console.log('les pv de ' + p2.name + ' sont a ' + p2.pv);
            var tmp = p1;
            p1 = p2;
            p2 = tmp;
        }
    };
    return Match;
}());
exports.Match = Match;
