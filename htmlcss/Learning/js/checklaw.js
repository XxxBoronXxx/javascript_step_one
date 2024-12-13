let balance = 1000;
let bonusBalance = 10;

let isBanned = true; // он не в бане?
let isExist = false; // игра не куплена?
let isSelling = false; // игра в продаже?

if (balance >= 1000 || bonusBalance >= 100) {
    switch (true) {
        case isBanned && isExist && isSelling:
            console.log(`Игру можно приобрести.`);
            break;
        case isBanned == false:
            console.log('Вы забанены.');
            break;
        case isSelling == false:
            console.log('Игра на данный момент не находится в продаже.');
        case isErist == false:
            console.log('Игра уже находится в вашей коллекции.');
            break;
    }
} else {
    console.log('Игру невозоможно приобрести.');
    switch (true) {
        case balance < 1000 && bonusBalance < 100:
            console.log(`На вашем счету не хватает баланса.\nБаланс бонусов - ${bonusBalance}\nБаланс - ${balance}`)
    }
}