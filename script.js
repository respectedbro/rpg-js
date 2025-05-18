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
  if (elem.classList.contains('location__village')) return 'Деревня';
  return null;
}

function disabledButtons(buttons, disabled) {
  buttons.forEach(btn => {
    if (inCombat) {
      btn.disabled = '';
    } else {
      btn.disabled = disabled;
    }

  });
}

function toggleLocButtons(btns) {
  btns.forEach(btn => {
    btn.style.display = 'none';
  });
}

function setMessage(place, mess) {
  const messageEvent = document.createElement('div');
  messageEvent.textContent = mess;
  place.append(messageEvent);
}

locations.addEventListener('click', (e) => {
  if (inCombat) return;

  const locationName = getLocationName(e.target);

  if (locationName) {
    locationNow.textContent = `Текущая локация: ${locationName}`;
  }

  if (locationName === 'Лес') {
    toggleLocButtons(locationButtons);
    const locationWays = document.querySelector('.location__ways');
    locationWays.style.display = 'flex';
    setMessage(consoleEvent, `...В дали слышен шум`);

    locationWays.addEventListener('click', (e) => {
      if (e.target.classList.contains('location__wood')) {
        setMessage(consoleEvent, `...Из-за дерева выходит огромное туловище)`);
        locationWays.style.display = 'none';
        startCombat('orc');
      } else if (e.target.classList.contains('location__bush')) {
        setMessage(consoleEvent, `...Вы нашли Зелье здоровья!`);
        userChar.inventory.push('Зелье здоровья');
        updateCharInfo();
        e.target.disabled = true;
        e.target.style.opacity = '0.5';
      }
    });
  }
});

function startCombat(enemyType) {
  inCombat = true;
  currentEnemy = {...enemies[enemyType]}; // Копируем врага
  disabledButtons(locationButtons, true); // Блокируем кнопки локаций
  disabledButtons(controlsBtns, false); // Разблокируем кнопки боя
  setMessage(consoleEvent,
      `...Это ${currentEnemy.name}! Здоровье: ${currentEnemy.health}`);

  const attackBtn = document.querySelector('.controls__attack');
  const defenseBtn = document.querySelector('.controls__defense');

  attackBtn.addEventListener('click', handleAttack);
  defenseBtn.addEventListener('click', handleDefense);
}

function handleAttack() {
  if (!inCombat) {
    return;
  }
  const damage = Math.max(1, userChar.strength - currentEnemy.defense);
  currentEnemy.health -= damage;

  setMessage(consoleEvent,
      `*${userChar.name} атакует и наносит ${damage} урона!`);

  if (currentEnemy.health <= 0) {
    endCombat(true);
    return;
  }

  setTimeout(() => enemyTurn(), 1000);
  // endCombat();
}

function handleDefense() {
  if (!inCombat) return;

  // Уменьшаем получаемый урон при защите
  const defenseBonus = 2;
  setMessage(consoleEvent, `*${userChar.name} готовится к защите!`);

  // Ход врага с бонусом защиты
  setTimeout(() => enemyTurn(defenseBonus), 1000);
}

function enemyTurn(defenseBonus = 0) {
  if (!inCombat) return;

  // Урон врага с учетом защиты
  const damage = Math.max(1,
      currentEnemy.strength - (userChar.defense + defenseBonus));
  userChar.health -= damage;
  updateCharInfo();

  setMessage(consoleEvent,
      `-${currentEnemy.name} атакует и наносит ${damage} урона!`);

  // Проверяем поражение
  if (userChar.health <= 0) {
    endCombat(false);
    return;
  }

  setMessage(consoleEvent,
      `Ваше здоровье: ${userChar.health}. Здоровье ${currentEnemy.name}: ${currentEnemy.health}`);
}

function endCombat(victory) {
  inCombat = false;
  disabledButtons(controlsBtns, true); // Блокируем кнопки боя
  disabledButtons(locationButtons, false); // Разблокируем кнопки локаций

  if (victory) {
    setMessage(consoleEvent, `Вы победили ${currentEnemy.name}!`);
    for (let key in userChar) {
      if (key !== 'name' && key !== 'type') {
        userChar[key] += 1
      }
    }
    updateCharInfo()
  } else {
    setMessage(consoleEvent, `Вы потерпели поражение...`);

  }

  currentEnemy = null;
}





