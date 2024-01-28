const apiKey = "d1907d41c305a36913af51f40fb6b0a1";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const serachBtn = document.querySelector(".search button");
const Icon = document.querySelector(".icon");
console.log(searchBox.value);

async function weatherInof(city){
    if(city == "" && city=="undefined")
        return;
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = data.main.temp +" ° C";
    document.querySelector(".humi").innerHTML = data.main.humidity +" %";
    document.querySelector(".speed").innerHTML = data.wind.speed +" km/h";
    document.querySelector(".description").innerHTML = data.weather[0].main;
    
}
serachBtn.addEventListener("click", () =>{
    weatherInof(searchBox.value);
});
