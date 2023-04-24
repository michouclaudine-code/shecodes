let apiKey = "c819171fe0abdc14039af4ef5dda283b";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

function showTemperature(response) {
  let temperature = document.querySelector(".temperature");
  let temp = Math.round(response.data.main.temp);
  temperature.innerHTML = `${temp}`;
}

function search(event) {
  event.preventDefault();
  let changeCity = document.querySelector("#input-search");

  let currentCity = document.querySelector(".city h1");
  currentCity.innerHTML = `${changeCity.value}`;

  axios
    .get(`${apiUrl}${changeCity.value}&appid=${apiKey}&units=metric`)
    .then(showTemperature);
}

let form = document.querySelector("form");
form.addEventListener("submit", search);

let now = new Date();

let hour = now.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let currentTime = document.querySelector(".daytime h1");
currentTime.innerHTML = `${hour}:${minutes}`;

let currentDay = document.querySelector(".daytime h2");
currentDay.innerHTML = `${day}`;

function displayCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = 8;
}

function displayFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector(".temperature");
  temperatureElement.innerHTML = 47;
}

let celciusLink = document.querySelector("#celcius");
let fahrenheitLink = document.querySelector("#fahrenheit");

celciusLink.addEventListener("click", displayCelcius);
fahrenheitLink.addEventListener("click", displayFahrenheit);
