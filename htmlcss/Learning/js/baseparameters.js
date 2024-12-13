// параметры по умолчанию в функции

const toPower = (num, power) => {
    power = power ?? 2; /* можно и создать просто новую переменную, power 2 : 
    const power2 = power ?? 2;
    return num ** power2;
    */
    return num ** power;
}

console.log(toPower(12));

// НОО, МОЖНО ЭТО ВСЁ УКАЗАТЬ ПРОСТО ПРОПИСАВ РАВНО КАК В КДОЕ СНИЗУ
const toPow = (num, power = 2) => {
    return num ** power;
}

console.log(toPow(3));