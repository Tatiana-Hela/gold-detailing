const coordinates = [
  50.40264008081105,
  30.40875833161278,
];

// Установка центра карты на Киеве
const map = L.map('map').setView(coordinates, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  titleSize: 512,
}).addTo(map);

// Добавление маркера с адресом
L.marker(coordinates).addTo(map);
