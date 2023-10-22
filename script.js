const apiKey = "3ed536f8030d3a46cd471f23a1820d3b";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

var searchBox = document.querySelector(".search input");
var searchBtn = document.querySelector(".search button");
var weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  if (response.status == 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    var data = await response.json();
    console.log(data);
    var city;
    document.querySelector(".error").style.display = "none";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°c";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

     if (data.weather[0].main == "Clear") {
        weatherIcon.src = "./images/clear.png";
        //   document.querySelector(".status").innerHTML="clear";
      }else if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "./images/clouds.png";
      //   document.querySelector(".status").innerHTML="Clouds";
    } else if (data.weather[0].main == "Rain") {
      weatherIcon.src = "./images/rain.png";
      //   document.querySelector(".status").innerHTML="Rain";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "./images/drizzle.png";
      //   document.querySelector(".status").innerHTML="Drizzle";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "./images/mist.png";
      //   document.querySelector(".status").innerHTML="Mist";
    }

    document.querySelector(".weather").style.display = "block";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

// checkWeather();
