
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
  elf: {type: 'Эльф', health: 9, strength: 13, defense: 1},
  dwarf: {type: 'Гном', health: 11, strength: 11, defense: 3}
};

const userChar = {
  name: '',
  type: '',
  health: 0,
  strength: 0,
  defense: 0,
  level: 1,
  inventory: ['Зелье здоровья']
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
    health: 16,
    strength: 10,
    defense: 3,
  }

};

