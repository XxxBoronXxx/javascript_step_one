let oneHourPrice = 80; //часовая ставка
let longWeek = 5; //дней в неделю готов работать
let longDay = 5; //часов в день готов выделять
let order = 40; //часов в общем не заказ
let getOut = 11; // через 11 дней должны уехать 

let bo = (order / longDay) < getOut;
let price = oneHourPrice * order;

console.log(`Успею ли я выполнить эту работу? - ${bo}`);
console.log(`Цена всего заказа - ${price}$`);
console.log(true + 10);
console.log(Number('xr'))