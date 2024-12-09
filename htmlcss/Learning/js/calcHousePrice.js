const deposit = 12000;
const percentYear = 7;
const priceHouse = 13500;
const howMuchTimeInYears = 2;

const rateYear = 0.07;
let result = deposit * (1+rateYear/12) ** 24;

if (result > priceHouse) {
    console.log(`Накопили мы за 2 года - ${result}. Можем купить. Вот сколько осталось - ${result - priceHouse}`);
} else if (result < priceHouse) {
    console.log(`Плохо сосали - ${result}`)
}