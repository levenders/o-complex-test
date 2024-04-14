# O-complex

## test task

## Getting Started

`npm i & npm start`

### [Figma](https://www.figma.com/file/XIYVl8ICFkdl3HJZcc8o8B/%D1%82%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5?type=design&node-id=0-1&mode=design&t=rSLLrjchY32qVL23-0)

### [Сonditions](https://nubersss.notion.site/React-Developer-Next-js-09c47b36c56447329399c044831c7ef9)

### Проделана следующая работа:

1. Сайт адаптирован под мобильные устройства и плашеты, при помощи медиа-запросов ( 320px / 720 px);

2. Получение отзывов и товаров по API, а также их размещение на странице:

   - первая страница товаров показывается сразу, остальыне можно подгрузить при помощи кнопки `Показать еще`;
   - при нажатии на кнопку `купить`, она меняется на кнопки - и + и поле для ввода любого количества товаров;
   - при изменении кол-ва любого из товаров меняется информация в корзине;
   - введенный номер телефона сохраняется при перезагрузки страницы
   - при нажатии кнопки "заказать" отправляется запрос на сервер

3. Проявление инициативы по улучшению:
   - добавлены прилоадеры пока грузится контент;
   - пофикшена xss атака через контент отзывов;

##### Что хотелось бы улучшить, и будет сделано в ближайшее время

- добавить валидацию на форму отправки корзины;
- добавление поп-ап окна при успешной отправке формы;
- сохранение корзины товаров при перезагрузке страницы;
- добавление кнопку прокрутки сайта в начало
