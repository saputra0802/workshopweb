const apiKey = '480c11415fc953381cf1292b4be47d75'

async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const resultDiv = document.getElementById('weatherResult');

  if (!city) {
    resultDiv.innerHTML = "<p>Silakan masukkan nama kota.</p>";
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=id`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Kota tidak ditemukan");
    const data = await response.json();

    resultDiv.innerHTML = `
      <h3>Cuaca di ${data.name}</h3>
      <p><strong>Suhu:</strong> ${data.main.temp} °C</p>
      <p><strong>Deskripsi:</strong> ${data.weather[0].description}</p>
      <p><strong>Kelembapan:</strong> ${data.main.humidity}%</p>
      <p><strong>Angin:</strong> ${data.wind.speed} m/s</p>
    `;
  } catch (error) {
    resultDiv.innerHTML = `<p style="color:red;">${error.message}</p>`;
  }
}
