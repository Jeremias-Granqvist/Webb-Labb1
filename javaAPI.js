const apiKey = 'ea3ba99484d74ee2acc8f77b34728aa4';

const businessLat = 57.7089;
const businessLon = 11.9746;

function getWeather(lat, lon) {
    const url = `https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${lon}&key=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = data.data[0];
            const cityName = weather.city_name;
            const temperature = weather.temp;
            const description = weather.weather.description;
            const windSpeed = weather.wind_spd;

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
