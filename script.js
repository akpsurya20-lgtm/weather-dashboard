async function getWeather() {
  const city = document.getElementById('cityInput').value;
  const apiKey = '570210ddb81948052b6d64a10d7ca20c';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  
  try {
    const response = await fetch(url);
    const data = await response.json();
    
    if (data.main) {
      document.getElementById('weatherResult').innerHTML = `
        <h2>${data.name}</h2>
        <p>🌡️ ${data.main.temp}°C</p>
        <p>💧 ${data.main.humidity}% humidity</p>
        <p>🌤️ ${data.weather[0].description}</p>
      `;
    } else {
      document.getElementById('weatherResult').innerHTML = 'City not found!';
    }
  } catch (error) {
    document.getElementById('weatherResult').innerHTML = 'Error fetching weather!';
  }
}
