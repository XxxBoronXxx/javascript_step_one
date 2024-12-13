function canAccessWebsite (age) {
    if (age < 18) {
        return 'Нет'; // если этот return работает, то всё заканчивается
    }
    return 'Да';
}

console.log(canAccessWebsite(11))

const canAccessWebsite2 = age => age < 18 ? 'Нет' : age > 18 ? 'Да' : 'тебе ровно 18 и это тест ваще крч';

console.log(canAccessWebsite2(19))


