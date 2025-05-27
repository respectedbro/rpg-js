const charInputName = document.getElementById('name');
const startGameButton = document.getElementById('startGame');
const startInfo = document.querySelector('.start__info');
const rpgWrapper = document.querySelector('.rpg__wrapper ');

startGameButton.addEventListener('click', () => {
  setMessage(
      '...Вы - искатель приключений, прибывший в деревню у границы загадочного леса. Местные жители рассказывают о древнем проклятии и просят помочь разобраться с участившимися нападениями монстров.');

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
    listItem.className = 'char__info-item';

    let value = userChar[key];
    if (key === 'inventory') {
      value = value.length === 0 ? 'Пусто' : value.join(', ');
    }
    listItem.textContent = `${propertyNames[key]}: ${value}`;
    charList.append(listItem);
  }

}