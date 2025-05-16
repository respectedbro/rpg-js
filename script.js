const userChar = {
    name: 'User',
    type: 'Человек',
    health: 100,
    strength: 20,
    defense: 15,
    level: 1,
    inventory: []
};

const charList = document.querySelector('.char__info-list');

charList.innerHTML = '';
const propertyNames = {
    name: 'Имя',
    type: 'Расса',
    health: 'Здоровье',
    strength: 'Сила',
    defense: 'Защита',
    level: 'Уровень',
    inventory: 'Инвентарь'
};
for (let key in userChar) {
    const listItem = document.createElement('li');
    listItem.className = 'char__info-item';

    let value = userChar[key];

    if (key === 'inventory') {
        value = value.length === 0 ? 'Пусто' : value.join(', ');
    }

    listItem.textContent = `${propertyNames[key]} : ${value}`;
    charList.append(listItem);
}
const locationNow = document.querySelector('.location__now');
const locations = document.querySelector('.location__buttons');

function getLocationName(elem) {
    if (elem.classList.contains('location__wood')) return 'Лес';
    if (elem.classList.contains('location__dungeon')) return 'Подземелье';
    if (elem.classList.contains('location__village')) return 'Деревня';
    return null;
}

locations.addEventListener('click', (e) => {
    const locationName = getLocationName(e.target);
    const consoleEvent = document.querySelector('.rpg__event-list');
    const messageEvent = document.createElement('div');
    const locationButtons = document.querySelectorAll('.location__wood, .location__dungeon, .location__village');
    if (locationName) {
        locationNow.textContent = `Текущая локация: ${locationName}`;
    }
    if (locationName === 'Лес') {
        locationButtons.forEach(btn => {
            btn.setAttribute('disabled', '')
        })
        consoleEvent.append(messageEvent);
        messageEvent.textContent = '...На вас нападает Орк';
    }
});

