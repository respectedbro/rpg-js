function startCombat(enemyType) {
  inCombat = true;
  currentEnemy = {...enemies[enemyType]};
  disabledButtons(locationButtons, true);
  disabledButtons(controlsBtns, false);
  setMessage(`...Это ${currentEnemy.name}! Здоровье: ${currentEnemy.health}`);

  const attackBtn = document.querySelector('.controls__attack');
  const defenseBtn = document.querySelector('.controls__defense');
  const healthyPotionBtn = document.querySelector('.controls__use-item');

  attackBtn.addEventListener('click', handleAttack);
  defenseBtn.addEventListener('click', handleDefense);
  healthyPotionBtn.addEventListener('click', handlePotion);
}

function disabledButtons(buttons, disabled) {
  buttons.forEach(btn => {
    inCombat ? btn.disabled = '' : btn.disabled = disabled;
  });
}

function handlePotion() {
  const potionIndex = userChar.inventory.indexOf('Зелье здоровья');

  if (potionIndex !== -1) {
    userChar.health += 5;

    userChar.inventory.splice(potionIndex, 1);

    setMessage(`Использовано Зелье здоровья! +5`);
    updateCharInfo();
  } else {
    setMessage( `У вас нет Зелья здоровья!`);
  }
}

function handleAttack() {
  if (!inCombat) {
    return;
  }
  const attackPower = Math.floor(Math.random() * userChar.strength) + 1;
  const damageReduction = currentEnemy.defense * 0.25; // Каждое очко защиты = -25% урона
  const damage = Math.max(1, Math.floor(attackPower * (1 - damageReduction)));
  currentEnemy.health -= damage;

  setMessage(`*${userChar.name} атакует и наносит ${damage} урона!`);

  if (currentEnemy.health <= 0) {
    endCombat(true);
    return;
  }

  setTimeout(() => enemyTurn(), 100);

}

function handleDefense() {
  if (!inCombat) return;

  // Уменьшаем получаемый урон при защите
  const defenseBonus = 2;
  setMessage(`*${userChar.name} готовится к защите!`);

  // Ход врага с бонусом защиты
  setTimeout(() => enemyTurn(defenseBonus), 100);
}

function enemyTurn(defenseBonus = 0) {
  if (!inCombat) return;

  // Урон врага с учетом защиты
  const enemyAttack = Math.floor(Math.random() * currentEnemy.strength) + 1;
  const damage = Math.max(1, enemyAttack - (userChar.defense + defenseBonus));

  userChar.health -= damage;
  updateCharInfo();

  setMessage(`-${currentEnemy.name} атакует и наносит ${damage} урона!`);


  if (userChar.health <= 0) {
    endCombat(false);
    return;
  }

  setMessage(`Ваше здоровье: ${userChar.health}. Здоровье ${currentEnemy.name}: ${currentEnemy.health}`);
}

function endCombat(victory) {
  inCombat = false;
  disabledButtons(controlsBtns, true);


  if (victory) {
    toggleLocButtons(locationButtons);
    disabledButtons(locationButtons, false);

    const statsToImprove = ['health', 'strength', 'defense', 'level'];
    const improvements = {
      health: 2,
      strength: 1,
      defense: 1,
      level: 1
    };
    statsToImprove.forEach(stat => {
      userChar[stat] += improvements[stat];
    });

    if (currentEnemy && currentEnemy.name === "Каменный Страж") {
      setMessage(`
        Вы победили древнего хранителя храма! И спасли жителей деревни
      `);
    } else {
      setMessage(`
      Победа! ${currentEnemy.name} повержен!
      Уровень: +1 (${userChar.level})
      Здоровье: +2 (${userChar.health})
      Сила: +1 (${userChar.strength})
      Защита: +1 (${userChar.defense})
    `);
    }

    const loot = ['Меч', 'Щит', null];
    const randomLoot = loot[Math.floor(Math.random() * loot.length)];
    if (randomLoot === null) {
      setMessage(`У врага ничего не было`);
    } else {
      userChar.inventory.push(randomLoot);
      setMessage(`Вы получили: ${randomLoot}`);
    }

    updateCharInfo();
  } else {
    locationButtons.forEach(btn => {
      btn.style.display = 'none';
    })
    setMessage(`Вы потерпели поражение...`);

  }

  currentEnemy = null;
}

