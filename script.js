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


function disabledButtons(buttons, disabled) {
    buttons.forEach(btn => {
        btn.disabled = disabled;
    });
}

function hiddenButton(btn) {
    btn.classList.toggle('hidden');
}

function setMessage(mess) {
    const messageEvent = document.createElement('div');
    messageEvent.classList.add('message');
    messageEvent.textContent = mess;
    setTimeout(() => {
        consoleEvent.prepend(messageEvent); // Добавляем сообщение в начало
    }, 700)
    // Прокрутка к верхнему сообщению
    consoleEvent.scrollTop = 0;
}

locations.addEventListener('click', (e) => {
    hiddenButton(e.target);
    const locationName = getLocationName(e.target);
    if (!locationName) {
        return;
    }
    locationNow.textContent = `Текущая локация: ${locationName}`;
    if (locationName === 'Лес') {
        combatLocations(e);
    }
    if (locationName === 'Подземелье') {
        locationDungeon(e);
    }
    if (locationName === 'Руины храма') {
        locationRemains(e);
    }
});
