import { SFRPGEffectType, SFRPGModifierType, SFRPGModifierTypes } from "../../../../modifiers/types.js";

export default function (engine) {
    engine.closures.add("calculateBaseAttackBonus", (fact, context) => {
        const data = fact.data;
        const classes = fact.classes;

        if (!data.attributes.baseAttackBonus) {
            data.attributes.baseAttackBonus = {
                value: 0,
                rolledMods: [],
                tooltip: []
            };
        }

        for (const cls of classes) {
            let mod = 0;
            switch (cls.data.bab) {
                case "slow": mod += Math.floor(cls.data.levels * 0.5); break;
                case "moderate": mod += Math.floor(cls.data.levels * 0.75); break;
                case "full": mod += cls.data.levels; break;
            }

            data.attributes.baseAttackBonus.tooltip.push(game.i18n.format("SFRPG.BABTooltip", {
                class: cls.name,
                bonus: mod.signedString()
            }));

            data.attributes.baseAttackBonus.value += mod;
        }

        data.attributes.bab = data.attributes.baseAttackBonus.value;
        
        return fact;
    }, { required: ["stackModifiers"], closureParameters: ["stackModifiers"] });
}