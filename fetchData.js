const startURL = 'https://api.openweathermap.org/data/2.5/weather?q=';
let city = 'Patna';
let endURL = '&units=metric&&appid=907a421ba77e1e9bd25be2203e161ac9';
let url = startURL + city + endURL;
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const fetchData = async (city) => {
    let response = await fetch(startURL + city + endURL);
    if (!response.ok) {
        console.log("Error")
    }
    else {

        let data = await response.json();
        console.log(data);
        var tz = data.timezone;
        var tz = data.timezone;
        var sunr = data.sys.sunrise + tz - 19800;

        var suns = data.sys.sunset + tz - 19800;

        var SUNR = new Date(sunr * 1000);
        var timestrrise = SUNR.toLocaleTimeString();

        var SUNS = new Date(suns * 1000);
        var timestrset = SUNS.toLocaleTimeString();

        //current time
        var curr_time = data.dt;
        curr_time = curr_time + tz - 19800;
        var CT = new Date(curr_time * 1000);
        // console.log(CT);
        var Time = CT.toLocaleTimeString();
        Time = Time.slice(0, 4) + Time.slice(7, 11)
        //current date
        var DDate = CT.toLocaleDateString();

        const dateObject = new Date(CT);
        const dayOfWeek = dateObject.getDay();
        const dayName = days[dayOfWeek];

        document.getElementById('day').innerHTML = dayName;

        document.getElementById('text_location').innerHTML = data.name

        document.getElementById('text_location_country').innerHTML = data.sys.country

        document.getElementById('text_temp').innerHTML = Math.round(data.main.temp)

        document.getElementById('humidity').innerHTML = `Humidity : ${data.main.humidity + ' %'}`

        document.getElementById('pressure').innerHTML = `Pressure : ${data.main.pressure + ' hPa'}`

        document.getElementById('lat').innerHTML = data.coord.lat + '° E'

        document.getElementById('long').innerHTML = data.coord.lon + '° N'

        document.getElementById('windspeed').innerHTML = `Wind Speed : ${data.wind.speed + ' m/s'}`

        document.getElementById('sr').innerHTML = `Sunrise : ${timestrrise}`;

        document.getElementById('ss').innerHTML = `Sunset : ${timestrset}`

        document.getElementById('time').innerHTML = `${Time}`

        document.getElementById('date').innerHTML = `${DDate}`

        document.getElementById('text_desc').innerHTML = data.weather[0].main

        document.getElementById('mt').innerHTML = ` ${Math.round(data.main.temp_min) + '°/ '}`

        document.getElementById('Mt').innerHTML = ` ${Math.round(data.main.temp_max) + '° '}`

        let p = 'https://openweathermap.org/img/wn/';
        let e = '@2x.png';


        document.getElementById('icon').src = p + data.weather[0].icon + e;


        if (data.weather[0].main == "Mist") {
            document.body.style.backgroundImage = "url('./src/images/mm.jpg')";
            document.getElementById('icon').src = "./src/final/mist.svg";

        }
        else if (data.weather[0].main == "Thunderstorm") {
            document.body.style.backgroundImage = "url('./src/images/thdr.jpg')";
            document.getElementById('icon').src = "./src/final/thunderstorms-day.svg";
        }
        else if (data.weather[0].main == "Clear") {
            document.body.style.backgroundImage = "url('./src/images/qwerty.jpg')";
            document.getElementById('icon').src = "./src/final/clear-day.svg";

        }
        else if (data.weather[0].main == "Scattered Clouds") {
            document.body.style.backgroundImage = "url('./src/images/sca-cloud.jpg')";
            document.getElementById('icon').src = "./src/final/overcast.svg";

        }
        else if (data.weather[0].main == "Clouds") {
            document.body.style.backgroundImage = "url('./src/images/cd.jpg')";
            document.getElementById('icon').src = "./src/final/overcast.svg";

        }
        else if (data.weather[0].main == "Rain") {
            document.body.style.backgroundImage = "url('./src/images/r2.jpg')";
            document.getElementById('icon').src = "./src/final/partly-cloudy-night-rain.svg";

        }
        else if (data.weather[0].main == "Broken Clouds") {
            document.body.style.backgroundImage = "url('./src/images/broken.jpg')";
            document.getElementById('icon').src = "./src/final/overcast-day.svg";

        }
        else if (data.weather[0].main == "Snow") {
            document.body.style.backgroundImage = "url('./src/images/snoww.jpg')";
            document.getElementById('icon').src = "./src/final/snow.svg";

        }
        else if (data.weather[0].main == "Few Clouds") {
            document.body.style.backgroundImage = "url('./src/images/few.jpg')";
            document.getElementById('icon').src = "./src/final/cloudy.svg";

        }
        else if (data.weather[0].main == "Shower Rain") {
            document.body.style.backgroundImage = "url('./src/images/bi3.jpg')";
            document.getElementById('icon').src = "./src/final/partly-cloudy-day-rain.svg";

        }
        else if (data.weather[0].main == "Drizzle") {
            document.body.style.backgroundImage = "url('./src/images/r1.jpg')";
            document.getElementById('icon').src = "./src/final/drizzle.svg";

        }
        // jhvgh
        else if (data.weather[0].main == "Smoke") {
            document.body.style.backgroundImage = "url('./src/images/smoke.jpg')";
            document.getElementById('icon').src = "./src/final/smoke.svg";

        }
        else if (data.weather[0].main == "Haze") {
            document.body.style.backgroundImage = "url('./src/images/haze.jpg')";
            document.getElementById('icon').src = "./src/final/haze.svg";

        }
        else if (data.weather[0].main == "Dust") {
            document.body.style.backgroundImage = "url('./src/images/dust.jpg')";
            document.getElementById('icon').src = "./src/final/dust-wind.svg";

        }
        else if (data.weather[0].main == "Fog") {
            document.body.style.backgroundImage = "url('./src/images/fog.jpg')";
            document.getElementById('icon').src = "./src/final/fog.svg";

        }
        else if (data.weather[0].main == "Sand") {
            document.body.style.backgroundImage = "url('./src/images/sand.jpg')";
            document.getElementById('icon').src = "./src/final/wind-beaufort-8.svg";

        }
        else if (data.weather[0].main == "Ash") {
            document.body.style.backgroundImage = "url('./src/images/ash.jpg')";
            document.getElementById('icon').src = "./src/final/wind-beaufort-9.svg";

        }
        else if (data.weather[0].main == "Squall") {
            document.body.style.backgroundImage = "url('./src/images/bi1.jpg')";
            document.getElementById('icon').src = "./src/final/hurricane.svg";

        }
        else if (data.weather[0].main == "Tornado") {
            document.body.style.backgroundImage = "url('./src/images/tor.jpg')";
            document.getElementById('icon').src = "./src/tornado.svg";

        }
        else {
            document.body.style.backgroundImage = "url('./src/images/r1.jpg')";
            document.getElementById('icon').src = "./src/final/mist.svg";
        }
    }

};
fetchData(city);
document.getElementById('btn').addEventListener('click', () => {
    let value = document.getElementById('cityName').value;
    fetchData(value);
})
