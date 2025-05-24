const resetGame = document.querySelector('.restart-btn')
function restartGame() {

    userChar.name = '';
    userChar.type = '';
    userChar.health = 0;
    userChar.strength = 0;
    userChar.defense = 0;
    userChar.level = 1;
    userChar.inventory = ['Зелье здоровья'];

    inCombat = false;
    currentEnemy = null;

    consoleEvent.innerHTML = '';

    locationNow.textContent = 'Текущая локация: Деревня';
    disabledButtons(controlsBtns, true);
    disabledButtons(locationButtons, false);

    document.querySelectorAll('.loc-btn').forEach(btn => {
        btn.classList.remove('hidden');
    });

    startInfo.style.display = 'block';
    rpgWrapper.style.display = 'none';

    charInputName.value = '';
    document.querySelectorAll('input[name="field"]').forEach(radio => {
        radio.checked = false;
    });
}


resetGame.addEventListener('click', restartGame);