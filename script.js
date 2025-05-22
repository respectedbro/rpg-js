const locationButtons = document.querySelectorAll('.loc-btn');
const locationNow = document.querySelector('.location__now');
const locations = document.querySelector('.location__buttons');
const controlsBtns = document.querySelectorAll('.cnt-btn');
const consoleEvent = document.querySelector('.rpg__event-list');
let inCombat = false;
let currentEnemy = null;

function getLocationName(elem) {
  if (elem.classList.contains('location__wood')) return 'Лес';
  if (elem.classList.contains('location__dungeon')) return 'Подземелье';
  if (elem.classList.contains('location__remains')) return 'Руины храма';
  return null;
}



function toggleLocButtons(buttons) {
  buttons.forEach(btn => {
    btn.classList.toggle('hidden');
  });
}

function hiddenButton(btn) {
  btn.style.display = 'none';
}

function setMessage(mess) {
  const messageEvent = document.createElement('div');
  messageEvent.classList.add('message');
  messageEvent.textContent = mess;
  consoleEvent.append(messageEvent);
}

locations.addEventListener('click', (e) => {
  if (inCombat) return;

  const locationName = getLocationName(e.target);
  if (!locationName) return;

  locationNow.textContent = `Текущая локация: ${locationName}`;

  if (locationName === 'Лес') {
    toggleLocButtons(locationButtons);
    const locationWays = document.querySelector('.location__ways');
    locationWays.style.display = 'flex';
    setMessage(
        `...Вы входите в густой древний лес. Воздух наполнен странными звуками, а между деревьями мелькают тени...`);
    hiddenButton(e.target);

    locationWays.addEventListener('click', (e) => {
      if (e.target.classList.contains('location__wood')) {
        setMessage(
            `...Вы углубляетесь в лес и внезапно перед вами появляется огромное туловище!`);
        hiddenButton(locationWays);
        startCombat('orc');
      } else if (e.target.classList.contains('location__bush')) {
        setMessage(`...Среди кустов вы находите Зелье здоровья!`);
        userChar.inventory.push('Зелье здоровья');
        hiddenButton(e.target);
        updateCharInfo();
      }
    });
  }

  if (locationName === 'Подземелье') {
    hiddenButton(e.target);
    setMessage(`...Вы идёте по тёмному подземелью и сзади на вас кто-то бежит`);
    startCombat('troll');
    toggleLocButtons(locationButtons);
  }

  if (locationName === 'Руины храма') {
    toggleLocButtons(locationButtons);
    const locationRemains = document.querySelector('.location__ways-remains');
    console.log(locationRemains);
    locationRemains.style.display = 'flex';
    setMessage(
        `...Вы стоите перед древними Руинами Храма. Когда-то здесь поклонялись забытому богу, пока жрецы не начали проводить тёмные ритуалы. Теперь место излучает зловещую энергию...`);

    hiddenButton(e.target);

    locationRemains.addEventListener('click', (e) => {
      if (e.target.classList.contains('location__r')) {
        setMessage(
            `...Среди обломков вы находите древний текст: "Когда жрецы возжелали бессмертия, бог наслал на них проклятие, превратив в камень..."`);
        setMessage(`Вы нашли артефакт`)
        userChar.inventory.push('Артефакт');
        hiddenButton(e.target);
        updateCharInfo();
      } else if (e.target.classList.contains('location__b')) {
        setMessage(
            `...Вы входите в полуразрушенный зал. В центре на пьедестале лежит древний артефакт, окружённый странным свечением!`);
        hiddenButton(locationRemains)
        startCombat('temple_guardian');
      }
    });
  }

});