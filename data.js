const charInputName = document.getElementById('name');
const startGameButton = document.getElementById('startGame');
const startInfo = document.querySelector('.start__info');
const rpgWrapper = document.querySelector('.rpg__wrapper ');
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
  human: {type: 'Человек', health: 3, strength: 2, defense: 2},
  elf: {type: 'Эльф', health: 2, strength: 3, defense: 1},
  dwarf: {type: 'Гном', health: 4, strength: 1, defense: 3}
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
    health: 2,
    strength: 1,
    defense: 2
  },
  troll: {
    name: 'Тролль',
    health: 3,
    strength: 2,
    defense: 3
  }
};

startGameButton.addEventListener('click', () => {

  if (!charInputName.value) {
    alert('Введите имя персонажа');
    return;
  }

  const selectedRace = document.querySelector('input[name="field"]:checked');
  if (!selectedRace) {
    alert('Выберите расу');
    return;
  }

  let status;
  if (selectedRace.id === 'mc1') status = raceStats.human;
  else if (selectedRace.id === 'mc2') status = raceStats.elf;
  else if (selectedRace.id === 'mc3') status = raceStats.dwarf;

  userChar.name = charInputName.value.trim();
  userChar.type = status.type;
  userChar.health = status.health;
  userChar.strength = status.strength;
  userChar.defense = status.defense;

  startInfo.style.display = 'none';
  rpgWrapper.style.display = 'flex';

  updateCharInfo();
});

function updateCharInfo() {
  const charList = document.querySelector('.char__info-list');
  charList.innerHTML = '';

  for (let key in userChar) {
    const listItem = document.createElement('li');
    listItem.className = '.char__info-item';

    let value = userChar[key];
    if (key === 'inventory') {
      value = value.length === 0 ? 'Пусто' : value.join(', ');
    }
    listItem.textContent = `${propertyNames[key]}: ${value}`;
    charList.append(listItem);
  }

}
