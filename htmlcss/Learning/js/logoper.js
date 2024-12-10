const isAdmin = true;
const canWrite = true;

console.log(`Системный файл ${isAdmin && canWrite}`); // И
console.log(`Обычный файл ${isAdmin || canWrite}`); // ИЛИ
console.log(`Инвертируем права админа ${!isAdmin}`); // НЕ

const isEdited = false;
const isSuperAdmin = true;
console.log(`Системный файл с редактированием ${isAdmin && canWrite && (!isEdited || isSuperAdmin)}`);

console.log('Вася' || 'Олег'); // выводит первый true
console.log('Вася' && 'Олег'); // выводит последний true если первый тоже true

let nameUser;
console.log(typeof nameUser);

if (typeof nameUser === 'undefined') {
    nameUser = "user228";
    console.log(nameUser);
    console.log(typeof nameUser);
}

let age = 0;

console.log(age || 18);
console.log(age ?? 18); // оперотор '??' - оператор нулевого слияния используется для проверки "нулевых" значений (то есть null или undefined) и задания значения по умолчанию, если операнд является одним из этих значений.