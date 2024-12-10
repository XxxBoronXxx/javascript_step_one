const priceBmwM5 = 5000;
const pricePorsche911 = 35000;
const budget = 35000
let iHave;

if (budget >= pricePorsche911) {
    iHave = 'Porsche 911';
} else if (budget >= priceBmwM5 && budget < pricePorsche911) { // && означает И 
    iHave = 'BmwM5';
} else {
    iHave = 'Ноги';
}

// -------------------------------------------------------
0 > 0 ? console.log('Больше') : console.log('пошел нахуй уебанище конченое!!!!');
/* -------------------------------------------------------
Так можно сократить условный блок if 
*/


console.log(`У меня хватает бабла на ${iHave}`);

console.log(`У меня хватает денег на ${budget >= pricePorsche911 ? 'Porsche 911': budget >= priceBmwM5 && budget < pricePorsche911 ? 'BmwM5' : 'ноги' }`) // этот тернарный оператор равносилен блоки if который написан в самом начале, но его можно засунуть в ${}