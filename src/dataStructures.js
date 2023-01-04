export const TypesEnum = {
  Normal: "Normal",
  Fire: "Fire",
  Fighting: "Fighting",
  Water: "Water",
  Flying: "Flying",
  Grass: "Grass",
  Poison: "Poison",
  Electric: "Electric",
  Ground: "Ground",
  Psychic: "Psychic",
  Rock: "Rock",
  Ice: "Ice",
  Bug: "Bug",
  Dragon: "Dragon",
  Ghost: "Ghost",
  Dark: "Dark",
  Steel: "Steel",
  Fairy: "Fairy",
};

export const typesColorAmount = [
  {
    name: TypesEnum.Normal,
    color: "(168, 167, 122, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Normal",
  },
  {
    name: TypesEnum.Fire,
    color: "(238, 129, 48, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Feuer",
  },
  {
    name: TypesEnum.Fighting,
    color: "(194, 46, 40, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Kampf",
  },
  {
    name: TypesEnum.Water,
    color: "(99, 144, 240, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Wasser",
  },
  {
    name: TypesEnum.Flying,
    color: "(169, 143, 243, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Flug",
  },
  {
    name: TypesEnum.Grass,
    color: "(122, 199, 76, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Pflanze",
  },
  {
    name: TypesEnum.Poison,
    color: "(163, 62, 161, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Gift",
  },
  {
    name: TypesEnum.Electric,
    color: "(247, 208, 44, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Elektro",
  },
  {
    name: TypesEnum.Ground,
    color: "(226, 191, 101, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Boden",
  },
  {
    name: TypesEnum.Psychic,
    color: "(249, 85, 135, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Psycho",
  },
  {
    name: TypesEnum.Rock,
    color: "(182, 161, 54, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Gestein",
  },
  {
    name: TypesEnum.Ice,
    color: "(150, 217, 214, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Eis",
  },
  {
    name: TypesEnum.Bug,
    color: "(166, 185, 26, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Käfer",
  },
  {
    name: TypesEnum.Dragon,
    color: "(111, 53, 252, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Drache",
  },
  {
    name: TypesEnum.Ghost,
    color: "(115, 87, 151, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Geist",
  },
  {
    name: TypesEnum.Dark,
    color: "(112, 87, 70, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Unlicht",
  },
  {
    name: TypesEnum.Steel,
    color: "(183, 183, 206, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Stahl",
  },
  {
    name: TypesEnum.Fairy,
    color: "(214, 133, 173, 1)",
    amountFirstType: 0,
    amountSecondType: 0,
    german_name: "Fee",
  },
];

export const resitencesMap = new Map([
  [
    TypesEnum.Normal,
    {
      simpleResistences: [],
      completeResistences: [TypesEnum.Ghost],
      weaknesses: [TypesEnum.Fighting],
    },
  ],
  [
    TypesEnum.Fire,
    {
      simpleResistences: [
        TypesEnum.Bug,
        TypesEnum.Steel,
        TypesEnum.Fire,
        TypesEnum.Grass,
        TypesEnum.Ice,
        TypesEnum.Fairy,
      ],
      completeResistences: [],
      weaknesses: [TypesEnum.Ground, TypesEnum.Rock, TypesEnum.Water],
    },
  ],
  [
    TypesEnum.Fighting,
    {
      simpleResistences: [TypesEnum.Rock, TypesEnum.Bug, TypesEnum.Dark],
      completeResistences: [],
      weaknesses: [TypesEnum.Flying, TypesEnum.Psychic, TypesEnum.Fairy],
    },
  ],
  [
    TypesEnum.Water,
    {
      simpleResistences: [
        TypesEnum.Steel,
        TypesEnum.Fire,
        TypesEnum.Water,
        TypesEnum.Ice,
      ],
      completeResistences: [],
      weaknesses: [TypesEnum.Grass, TypesEnum.Electric],
    },
  ],
  [
    TypesEnum.Flying,
    {
      simpleResistences: [TypesEnum.Fighting, TypesEnum.Bug, TypesEnum.Grass],
      completeResistences: [TypesEnum.Ground],
      weaknesses: [TypesEnum.Rock, TypesEnum.Electric, TypesEnum.Ice],
    },
  ],
  [
    TypesEnum.Grass,
    {
      simpleResistences: [
        TypesEnum.Ground,
        TypesEnum.Water,
        TypesEnum.Grass,
        TypesEnum.Electric,
      ],
      completeResistences: [],
      weaknesses: [
        TypesEnum.Flying,
        TypesEnum.Poison,
        TypesEnum.Bug,
        TypesEnum.Fire,
        TypesEnum.Ice,
      ],
    },
  ],
  [
    TypesEnum.Poison,
    {
      simpleResistences: [
        TypesEnum.Fighting,
        TypesEnum.Poison,
        TypesEnum.Bug,
        TypesEnum.Grass,
        TypesEnum.Fairy,
      ],
      completeResistences: [],
      weaknesses: [TypesEnum.Ground, TypesEnum.Psychic],
    },
  ],
  [
    TypesEnum.Electric,
    {
      simpleResistences: [
        TypesEnum.Flying,
        TypesEnum.Steel,
        TypesEnum.Electric,
      ],
      completeResistences: [],
      weaknesses: [TypesEnum.Ground],
    },
  ],
  [
    TypesEnum.Ground,
    {
      simpleResistences: [TypesEnum.Poison, TypesEnum.Rock],
      completeResistences: [TypesEnum.Electric],
      weaknesses: [TypesEnum.Water, TypesEnum.Grass, TypesEnum.Ice],
    },
  ],
  [
    TypesEnum.Psychic,
    {
      simpleResistences: [TypesEnum.Fighting, TypesEnum.Psychic],
      completeResistences: [],
      weaknesses: [TypesEnum.Bug, TypesEnum.Ghost, TypesEnum.Dark],
    },
  ],
  [
    TypesEnum.Rock,
    {
      simpleResistences: [
        TypesEnum.Normal,
        TypesEnum.Flying,
        TypesEnum.Poison,
        TypesEnum.Fire,
      ],
      completeResistences: [],
      weaknesses: [
        TypesEnum.Fighting,
        TypesEnum.Ground,
        TypesEnum.Steel,
        TypesEnum.Water,
        TypesEnum.Grass,
      ],
    },
  ],
  [
    TypesEnum.Ice,
    {
      simpleResistences: [TypesEnum.Ice],
      completeResistences: [],
      weaknesses: [
        TypesEnum.Ice,
        TypesEnum.Rock,
        TypesEnum.Steel,
        TypesEnum.Ice,
      ],
    },
  ],
  [
    TypesEnum.Bug,
    {
      simpleResistences: [
        TypesEnum.Fighting,
        TypesEnum.Ground,
        TypesEnum.Grass,
      ],
      completeResistences: [],
      weaknesses: [TypesEnum.Flying, TypesEnum.Rock, TypesEnum.Fire],
    },
  ],
  [
    TypesEnum.Dragon,
    {
      simpleResistences: [
        TypesEnum.Fire,
        TypesEnum.Water,
        TypesEnum.Grass,
        TypesEnum.Electric,
      ],
      completeResistences: [],
      weaknesses: [TypesEnum.Ice, TypesEnum.Dragon, TypesEnum.Fairy],
    },
  ],
  [
    TypesEnum.Ghost,
    {
      simpleResistences: [TypesEnum.Poison, TypesEnum.Bug],
      completeResistences: [TypesEnum.Normal, TypesEnum.Fighting],
      weaknesses: [TypesEnum.Ghost, TypesEnum.Dark],
    },
  ],
  [
    TypesEnum.Dark,
    {
      simpleResistences: [TypesEnum.Ghost, TypesEnum.Dark],
      completeResistences: [TypesEnum.Psychic],
      weaknesses: [TypesEnum.Fighting, TypesEnum.Bug, TypesEnum.Fairy],
    },
  ],
  [
    TypesEnum.Steel,
    {
      simpleResistences: [
        TypesEnum.Normal,
        TypesEnum.Flying,
        TypesEnum.Rock,
        TypesEnum.Bug,
        TypesEnum.Steel,
        TypesEnum.Grass,
        TypesEnum.Psychic,
        TypesEnum.Ice,
        TypesEnum.Dragon,
        TypesEnum.Fairy,
      ],
      completeResistences: [TypesEnum.Poison],
      weaknesses: [TypesEnum.Fighting, TypesEnum.Ground, TypesEnum.Fire],
    },
  ],
  [
    TypesEnum.Fairy,
    {
      simpleResistences: [TypesEnum.Fighting, TypesEnum.Bug, TypesEnum.Dark],
      completeResistences: [TypesEnum.Dragon],
      weaknesses: [TypesEnum.Poison, TypesEnum.Steel],
    },
  ],
]);

export const typeCombinations = [];

function generateCombinations() {
  typesColorAmount.forEach((type) => {
    typeCombinations.push({
      name: type.name,
      amountRes: 0,
      amountDoubleRes: 0,
      amountCompleteRes: 0,
      amountWeak: 0,
      amountDoubleWeak: 0,
      amountPokemon: 0,
    });
    typesColorAmount.forEach((type2) => {
      if (type.name !== type2.name) {
        const newCombination = `${type.name}/${type2.name}`;
        const newCombinationReverse = newCombination
          .split("/")
          .reverse()
          .join("/");
        const foundReverseCombination = typeCombinations.find(
          (combi) => combi.name === newCombinationReverse
        );
        if (!foundReverseCombination)
          typeCombinations.push({
            name: newCombination,
            amountRes: 0,
            amountDoubleRes: 0,
            amountCompleteRes: 0,
            amountWeak: 0,
            amountDoubleWeak: 0,
            amountPokemon: 0,
          });
      }
    });
  });
}
//111 drache elektro passt nicht
// function calcTypeCombiWeakAndEffect() {
//   typeCombinations.forEach((combi) => {
//     const types = combi.name.split("/");
//     const type1 = types[0];
//     const type2 = types[1];

//     const type1SimpleRes = resitencesMap.get(type1).simpleResistences;
//     const type1Weaknesses = resitencesMap.get(type1).weaknesses;
//     const type1CompleteRes = resitencesMap.get(type1)?.completeResistences;
//     const type2SimpleRes = resitencesMap.get(type2)?.simpleResistences;
//     const type2Weaknesses = resitencesMap.get(type2)?.weaknesses;
//     const type2CompleteRes = resitencesMap.get(type2)?.completeResistences;

//     type1SimpleRes.forEach((type1Resistence) => {
//       combi.amountRes++;
//       if (type2) {
//         type2Weaknesses.forEach((type2Weakness) => {
//           if (type2Weakness === type1Resistence) combi.amountRes--;
//         });

//         type2SimpleRes.forEach((type2Resistence) => {
//           if (type1Resistence === type2Resistence) {
//           }
//         });
//       }
//     });

//     type1Weaknesses.forEach((type1Weakness) => {
//       combi.amountWeak++;

//       if (type2) {
//         type2SimpleRes.forEach((type2Resistence) => {
//           if (type1Weakness === type2Resistence) combi.amountWeak--;
//         });
//         type2Weaknesses.forEach((type2Weakness) => {
//           if (type2Weakness === type1Weakness) {
//             combi.amountDoubleWeak++;
//             combi.amountRes += -2;
//           }
//         });
//       }
//     });

//     if (type2) {
//       type2SimpleRes.forEach((type2Resistence) => {
//         combi.amountRes++;
//         type1Weaknesses.forEach((type1Weakness) => {
//           if (type1Weakness === type2Resistence) combi.amountRes--;
//         });
//       });

//       type2Weaknesses.forEach((type2Weakness) => {
//         combi.amountWeak++;

//         type1SimpleRes.forEach((type1Resistence) => {
//           if (type2Weakness === type1Resistence) combi.amountWeak--;
//         });
//       });

//       combi.amountCompleteRes +=
//         resitencesMap.get(type2).completeResistences.length;
//     }

//     combi.amountCompleteRes +=
//       resitencesMap.get(type1).completeResistences.length;
//   });

//   console.log(typeCombinations);
// }

function setWeakAndEffect() {
  typeCombinations.forEach((typeCombi) => {
    for (const [key, value] of Object.entries(TypesEnum)) {
      const multiplier = getMultiplier(value, typeCombi.name);
      translateMultiplier(multiplier, typeCombi);
    }
  });
}

function translateMultiplier(multiplier, typeCombi) {
  switch (multiplier) {
    case 0:
      typeCombi.amountCompleteRes += 1;
      break;
    case 0.25:
      typeCombi.amountDoubleRes += 1;
      break;
    case 0.5:
      typeCombi.amountRes += 1;
      break;
    case 2:
      typeCombi.amountWeak += 1;
      break;
    case 4:
      typeCombi.amountDoubleWeak += 1;
      break;
    default:
      break;
  }
}

function getMultiplier(attackingType, defendingTypeCombi) {
  // keys is a list of letters found in the types of attacks/defenses
  const keys = [..."BWSEIRNulkcDPotyeG"];

  // getIndex is a single case statement.
  // it checks each of keys, one-by-one, falling through until we've found the proper index
  const getIndex = (x) => keys.findIndex((c) => x.match(c));

  // encodedValues is a list, indexed by `keys`, where each value is 7-characters.
  const encodedValues =
    "kjwhcgnj2xd6elihtlneemw82duxijsazl3sh4iz5akjmlmsqds06xf1sbb8d0rl1nu7a2kjwi3mykjwlbpmk1up4mzl1iuenedor0bdmkjwmpk6rhcg4h3en3pew5";

  // the 7-character value (e.g., B=0="kjwhcgn", W=1="j2xd6el") were created by
  // turning base4 values into base36, so let's turn this back into a string the same way
  const valuesForAttack = parseInt(
    encodedValues.substr(getIndex(attackingType) * 7, 7),
    36
  ).toString(4);

  // valuesForAttack is indexed by defenseType.  The value will be 0..3, depending on the multiplier

  // let's get an array of the multipliers and reduce...
  const multiplier = defendingTypeCombi
    .split("/")
    .reduce(
      (oldMultiplier, defenseType) =>
        oldMultiplier * [0, 0.5, 1, 2][valuesForAttack[getIndex(defenseType)]],
      1
    );
  return multiplier;
}

generateCombinations();
setWeakAndEffect();
console.log(typeCombinations);
console.log(getMultiplier("Bug", "Elektric/Psychic"));
