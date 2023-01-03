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
      weaknesses: [],
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
      simpleResistences: [TypesEnum.Steel, TypesEnum.Fire, TypesEnum.Water],
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
      amountDoubleRes: 0,
      amountQadrupleRes: 0,
      amountCompleteRes: 0,
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
            amountDoubleRes: 0,
            amountQadrupleRes: 0,
            amountCompleteRes: 0,
            amountPokemon: 0,
          });
      }
    });
  });
}

function calcTypeCombiWeakAndEffect() {}

generateCombinations();
