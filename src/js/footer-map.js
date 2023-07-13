var map = L.map('map').setView([50.43186, 30.359328], 13); // Установка центра карты на Киеве
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  titleSize: 512,
}).addTo(map);

// Добавление маркера с адресом
var marker = L.marker([50.43186, 30.359328]).addTo(map);
