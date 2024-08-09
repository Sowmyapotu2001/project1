document.addEventListener("DOMContentLoaded", function() {
    const apiKey = "2b411f40532a413b9d68e7638b9430e2"; // Replace with your OpenWeatherMap API key
    const city = "Bengaluru";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    //const apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=86775c734c88167e998b9166c06c8dec`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherWidget = document.getElementById("weather-data");
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            const humidity = data.main.humidity;

            weatherWidget.innerHTML = `
                <p><i class="fas fa-thermometer-half"></i> Temperature: ${temperature}°C</p>
                    <p><i class="fas fa-cloud-sun"></i> Condition: ${description}</p>
                    <p><i class="fas fa-tint"></i> Humidity: ${humidity}%</p>
            `;
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            const weatherWidget = document.getElementById("weather-data");
            weatherWidget.innerHTML = `<p>Unable to retrieve weather data</p>`;
        });
});
