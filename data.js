
const propertyNames = {
  name: 'Имя',
  type: 'Раса',
  health: 'Здоровье',
  strength: 'Сила',
  defense: 'Защита',
  level: 'Уровень',
  inventory: 'Инвентарь'
};

const raceStats = {
  human: {type: 'Человек', health: 10, strength: 12, defense: 2},
  elf: {type: 'Эльф', health: 2, strength: 13, defense: 1},
  dwarf: {type: 'Гном', health: 4, strength: 10, defense: 3}
};

const userChar = {
  name: '',
  type: '',
  health: 0,
  strength: 0,
  defense: 0,
  level: 1,
  inventory: []
};

const enemies = {
  orc: {
    name: 'Орк',
    health: 9,
    strength: 3,
    defense: 2
  },
  troll: {
    name: 'Тролль',
    health: 10,
    strength: 4,
    defense: 3
  },
  temple_guardian: {
    name: "Каменный Страж",
    health: 15,
    strength: 5,
    defense: 3,
  }

};

