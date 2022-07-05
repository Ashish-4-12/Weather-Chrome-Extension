
const API_key = '907a421ba77e1e9bd25be2203e161ac9'

var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
var city = 'patna';
var units = '&units=metric&';
var apikey = 'appid=907a421ba77e1e9bd25be2203e161ac9';

var url = api + city + units + apikey;
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
fetch(url)
    .then((data) => data.json())
    .then((jsonData) => {

        fetch(`https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`)
            .then((res) => res.blob())
            .then((result) => {


                var tz = jsonData.timezone;
                var sunr = jsonData.sys.sunrise + tz - 19800;

                var suns = jsonData.sys.sunset + tz - 19800;

                var SUNR = new Date(sunr * 1000);
                var timestrrise = SUNR.toLocaleTimeString();

                var SUNS = new Date(suns * 1000);
                var timestrset = SUNS.toLocaleTimeString();

                //current time
                var curr_time = jsonData.dt;
                curr_time = curr_time + tz - 19800;
                var CT = new Date(curr_time * 1000);
                var Time = CT.toLocaleTimeString();
                Time = Time.slice(0, 4) + Time.slice(7, 11)
                //current date
                var DDate = CT.toLocaleDateString();
                // console.log(DDate)
                DDate = DDate.replace('/', '|');
                DDate = DDate.replace('/', '|');

                document.getElementById('text_location').innerHTML = jsonData.name

                document.getElementById('text_location_country').innerHTML = jsonData.sys.country

                document.getElementById('text_temp').innerHTML = Math.round(jsonData.main.temp)

                document.getElementById('humidity').innerHTML = `Humidity : ${jsonData.main.humidity + ' %'}`

                document.getElementById('pressure').innerHTML = `Pressure : ${jsonData.main.pressure + ' hPa'}`

                document.getElementById('lat').innerHTML = jsonData.coord.lat + ' E'

                document.getElementById('long').innerHTML = jsonData.coord.lon + ' N'

                document.getElementById('windspeed').innerHTML = `Wind Speed : ${jsonData.wind.speed + ' m/s'}`

                document.getElementById('sr').innerHTML = `Sunrise : ${timestrrise}`;

                document.getElementById('ss').innerHTML = `Sunset : ${timestrset}`

                document.getElementById('time').innerHTML = `${Time}`

                document.getElementById('date').innerHTML = `${DDate}`

                document.getElementById('text_feelslike').innerHTML = Math.round(jsonData.main.feels_like)

                document.getElementById('text_desc').innerHTML = jsonData.weather[0].description

                document.getElementById('mt').innerHTML = `Temp_min : ${Math.round(jsonData.main.temp_min) + ' °C'}`

                document.getElementById('Mt').innerHTML = `Temp_max : ${Math.round(jsonData.main.temp_max) + ' °C'}`

                const imageObjURL = URL.createObjectURL(result);
                document.getElementById('icon').src = imageObjURL
            })

    })




//aynsc and await : allow us to handle promises in slightly more readable and elegant way.

async function get() {
    const respone = await fetch(url);
    const data = await respone.json();
    if (data.weather[0].description == "mist") {
        document.body.style.backgroundImage = "url('mist.jpg')";
        document.style.zIndex = "-1";
    }
    else if (data.weather[0].description == "haze") {
        document.body.style.backgroundImage = "url('misty.jpg')";
    }
    else if (data.weather[0].description == "clear sky") {
        document.body.style.backgroundImage = "url('qwerty.jpg')";
        document.style.zIndex = "-1";
    }
    else if (data.weather[0].description == "scattered clouds") {
        document.body.style.backgroundImage = "url('sca-cloud.jpg')";
        document.style.zIndex = "-1";
    }
    else if (data.weather[0].description == "light rain") {
        document.body.style.backgroundImage = "url('r2.jpg')";
        document.style.zIndex = "-1";
    }
    else if (data.weather[0].description == "broken clouds") {
        document.body.style.backgroundImage = "url('broken.jpg')";
        document.style.zIndex = "-1";
    }
    else if (data.weather[0].description == "overcast clouds") {
        document.body.style.backgroundImage = "url('bi3.jpg')";
        document.style.zIndex = "-1";
    }
    else if (data.weather[0].description == "few clouds") {
        document.body.style.backgroundImage = "url('few.jpg')";
        document.style.zIndex = "-1";
    }
    else if (data.weather[0].description == "moderate rain") {
        document.body.style.backgroundImage = "url('bi1.jpg')";
        document.style.zIndex = "-1";
    }
    else if (data.weather[0].description == "heavy intensity rain") {
        document.body.style.backgroundImage = "url('r1.jpg')";
        document.style.zIndex = "-1";
    }
}
get();

// alert(moment().format());
