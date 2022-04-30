;(function(){
    ymaps.ready(function () {
        var myMap = new ymaps.Map('ymap', {
                center: [59.685122, 30.442863],
                zoom: 16
            }, {
                searchControlProvider: 'yandex#search'
            }),
    
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
                hintContent: 'Наш магазин',
                balloonContent: 'г.Павловск ул Первого Мая 12'
            }, {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: '../img/common/market2.jpg',
                // Размеры метки.
                iconImageSize: [45, 50],
                // Смещение левого верхнего угла иконки относительно
                // её "ножки" (точки привязки).
                iconImageOffset: [-5, -38]
            });
    
        myMap.geoObjects.add(myPlacemark)
    });
})();