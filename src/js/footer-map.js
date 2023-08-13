var map = L.map('map').setView([50.426907, 30.361476], 13); // Установка центра карты на Киеве
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 18,
  titleSize: 512,
}).addTo(map);

// Добавление маркера с адресом
var marker = L.marker([50.426907, 30.361476]).addTo(map);
