// const restartGame = document.querySelector('.restart-btn')
// function resetCombat() {
//   inCombat = false;
//   currentEnemy = null;
//   disabledButtons(controlsBtns, true);
//
// }
//
// restartGame.addEventListener('click', resetGame)
// function resetGame() {
//   resetCombat()
//
//   userChar.name = '';
//   userChar.type = '';
//   userChar.health = 0;
//   userChar.strength = 0;
//   userChar.defense = 0;
//   userChar.level = 1;
//   userChar.inventory = [];
//
//
//   document.querySelector('.rpg__event-list').innerHTML = '';
//
//   document.querySelector('.rpg__wrapper').style.display = 'none';
//   document.querySelector('.start__info').style.display = 'flex';
//   document.getElementById('name').value = '';
//   document.querySelectorAll('input[name="field"]').forEach(radio => {
//     radio.checked = false;
//   });
//
//
// }
//
// restartGame.addEventListener('click', resetGame);