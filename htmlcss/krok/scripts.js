document.addEventListener("DOMContentLoaded", function () {
    // Пример анимации появления продуктов с задержкой
    const products = document.querySelectorAll('.product');
    products.forEach((product, index) => {
        setTimeout(() => {
            product.style.opacity = '1';
            product.style.transform = 'translateY(0)';
        }, index * 300);
    });

    // Анимация для изображений продуктов
    const images = document.querySelectorAll('.product-img');
    images.forEach((img) => {
        img.style.opacity = '1';
        img.style.transform = 'scale(1)';
    });

    // Получаем кнопку и body элемента
    const epilepsyButton = document.getElementById('epilepsyButton');
    const body = document.body;

    // Обработчик события для кнопки
    epilepsyButton.addEventListener('click', function () {
        // Если эффект уже включен, отключаем его
        if (body.classList.contains('epilepsy-active')) {
            body.classList.remove('epilepsy-active');
            epilepsyButton.textContent = 'Включить эпилептический эффект';
        } else {
            // Если эффект не включен, включаем его
            body.classList.add('epilepsy-active');
            epilepsyButton.textContent = 'Выключить эпилептический эффект';
        }
    });
});
