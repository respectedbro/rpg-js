function locationWood(e) {
    setMessage(`...Вы входите в густой древний лес...`);
    setMessage(`...Перед вами появляется огромное туловище!`);
    setTimeout(() => {
        startCombat('orc');
    }, 1000);


}

function locationDungeon(e) {
    setMessage(`...Вы входите в густой древний лес...`);
    setMessage(`......Вы идёте по тёмному подземелью и сзади на вас кто-то бежит`);
    setTimeout(() => {
        startCombat('troll');
    }, 1000);

}

function locationRemains(e) {
    setMessage(`...Вы стоите перед древними Руинами Храма. Место излучает зловещую энергию...`);
    setMessage(`...Вы входите в полуразрушенный зал. Перед вами появляется силуэт`);
    setTimeout(() => {
        startCombat('temple_guardian');
    }, 1000);

}