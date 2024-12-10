'Use strict'

const roleUser = prompt('Какая ваша роль? ');

switch (roleUser) {
    case '11': // это крч if 
        console.log('Какой нахуй менеджер, пиздабол блять.');
        break;
    case 'admin': // это типа else if
        console.log('Админ? Пизди меньше я вызываю модератора!');
        break;
    default: // это типа else
        console.log('Я вообще хуй пойми кто ты...');
        break;
}

switch (roleUser) {
    case '11': // так как в этом блоке нет кода, он переходит к следующему
    case 'admin':
        console.log('52 проверка'); 
        break;
    default:
        console.log('Я вообще хуй пойми кто ты...');
        break;
}

const num = 0
switch (true) {
    case num > 0:
        console.log('Положительный');
        break;
    case num < 0:
        console.log('Отрицательный');
        break;
    default:
        console.log('Зеро сука')
}