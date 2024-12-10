const bot = prompt('Сколько будет 7 + или - 15?');

switch (bot) {
    case 'Я не робот':
    case '22':
    case '-8':
        console.log('Успех!!!');
        break;
    default:
        console.log('Вы ёбаный робот!!!');
        let failCheckBot = prompt('Ты робот!!!');
        switch (failCheckBot) {
            case 'Я не робот':
            case 'Пошёл нахуй':
                console.log('Окей верю, ты не робот.');
                break;
            default:
                console.log('Какой же ты сука тупорылый, просто пиздец');
                break;
        }
}