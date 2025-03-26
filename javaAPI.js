const apiKey = 'ea3ba99484d74ee2acc8f77b34728aa4';

const businessLat = 57.7089;
const businessLon = 11.9746;
function getWeather(lat, lon) {
    //const url = `https://api.weatherbit.io/v2.0/current&lat=${lat}&lon=${lon}&key=${apiKey}`;

    const url = 'https://api.weatherapi.com/v1/current.json?key=a95052a7a95342c7933223417252603 &q=Gothenburg&aqi=no';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const cityName = data.location.name;
            const temperature = data.current.temp_c;
            const description = data.current.condition.text;
            const windSpeed = data.current.wind_kph;

            const weatherDiv = document.getElementById('weather');
            weatherDiv.innerHTML = `
                <h2>Weather in ${cityName}</h2>
                <p>Temperature: ${temperature}°C</p>
                <p>Condition: ${description}</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
            document.getElementById('loading').style.display = 'none';
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
            document.getElementById('loading').innerText = 'Failed to load weather data';
        });
}
getWeather(businessLat, businessLon);
