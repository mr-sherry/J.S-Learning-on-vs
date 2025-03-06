let searchBox = document.querySelector("input");
let searchBtn = document.querySelector("button");
let weatherIcon = document.querySelector("img");

async function checkWeather(city) {
  let response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=ed6312415dae4c678fb70748250403&q=${city}&aqi=no`
  );
  let data = await response.json();

  document.querySelector("#temp").innerHTML = `${data.current.temp_c}°C`;
  document.querySelector("#city").innerHTML = data.location.name;
  document.querySelector("#humidity1").innerHTML = data.current.humidity;

  weatherIcon.src = `https:${data.current.condition.icon}`;
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
