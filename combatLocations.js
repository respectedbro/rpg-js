function combatLocations(e) {
    setMessage(`...Вы входите в густой древний лес...`);
    setMessage(`...Перед вами появляется огромное туловище!`);
    startCombat('orc');
}

function locationDungeon(e) {
    setMessage(`...Вы входите в густой древний лес...`);
    setMessage(`......Вы идёте по тёмному подземелью и сзади на вас кто-то бежит`);
    startCombat('troll');
}

function locationRemains(e) {
    setMessage(`...Вы стоите перед древними Руинами Храма. Место излучает зловещую энергию...`);
    setMessage(`...Вы входите в полуразрушенный зал. Перед вами появляется силуэт`);
    startCombat('temple_guardian');
}