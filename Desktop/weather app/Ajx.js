
const weathercontainer=document.querySelector('.weather-container');
const request = new XMLHttpRequest();
request.open('GET', 'https://api.openweathermap.org/data/2.5/weather?lat=12.1450&lon=3.4897&appid=f9b728cb801950b94db12e94d44d68e1&units=metric');
request.send();

request.addEventListener('load', function () {
    if (this.status === 200) { // Check if request was successful
        const data = JSON.parse(this.responseText);
        console.log(data);
        // Extract and use data as needed
        // const icons = Object.values(data.weather).map(curr => curr.icon);
        const iconCode=data.weather[0].icon;
        const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
        
const html=`
<div class="weather-card">
      <h1 class="city-name">${data.sys.country}</h1>
      <h2 class="city-name">${data.name}</h2>
      <img src=" " alt="Weather Icon" class="weather-icon">
      <p class="description">Weather Description</p>
      <p class="temp">Temperature: <span id="temperature">${data.main.temp_min}</span>°C</p>
      <p class="details">Humidity: <span id="humidity">${data.wind.deg}</span>% | Wind: <span id="wind-speed">${data.wind.speed}</span> m/s</p>
    </div> 

`


weathercontainer.insertAdjacentHTML('beforeend',html);
document.querySelector('.weather-icon').src=iconUrl;

    } else {
        console.error('Error fetching data:', this.status, this.statusText);
    }
});
