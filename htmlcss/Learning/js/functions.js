nameAsk = 'Элиас';

/*console.log(`Ваш ник ${nickUser('zsemf')}`) это анонимная функция
её нельзя вызвать как в этой строке, её можно вызвать только после того как она была создана
*/

console.log(`Салам ${nameUser(nameAsk)}`); // а эту функцию можно вызвать до её создания
function nameUser(name) {
    return name;
}

const nickUser = function (nick) {
    return nick;
}
console.log(`Ваш ник ${nickUser('zsemf')}`);

// стрелочная функция теперь
const square = (num) => num * num; //так-же если вам нужна функция с несколькими аргументами, то обязательно нужны скобки, а если 1 аргумент скобки необязательны
console.log(`Квадрат числа 12 = ${square(12)}`);
// так-же стрелочную функцию можно сделать и многострочной, как обычную функцию --



const squares = (num) => {
    console.log('Стрелочная функция с более чем 1 строками.');
    return num * num;
}


console.log(squares(32));