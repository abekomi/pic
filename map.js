async function getIpInfo() {
  const response = await fetch('https://ipinfo.io/json?token=2f48e27c4b413b');
  const data = await response.json();
  return data;
}

function initMap(lat, lon) {
  const map = L.map('map').setView([lat, lon], 13);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  L.marker([lat, lon]).addTo(map)
      .bindPopup('Your location')
      .openPopup();
}

window.onload = async () => {
  const ipInfo = await getIpInfo();
  const loc = ipInfo.loc.split(',');
  const lat = parseFloat(loc[0]);
  const lon = parseFloat(loc[1]);
  
  initMap(lat, lon);
};
