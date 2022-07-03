const API_key = '907a421ba77e1e9bd25be2203e161ac9'


fetch('https://api.openweathermap.org/data/2.5/weather?q=kohima&units=metric&appid=907a421ba77e1e9bd25be2203e161ac9')
    .then((data) => data.json())
    .then((jsonData) => {

        fetch(`https://openweathermap.org/img/wn/${jsonData.weather[0].icon}@2x.png`)
            .then((res) => res.blob())
            .then((result) => {
                document.getElementById('text_location').innerHTML = jsonData.name

                document.getElementById('text_location_country').innerHTML = jsonData.sys.country

                document.getElementById('text_temp').innerHTML = Math.round(jsonData.main.temp)

                document.getElementById('text_feelslike').innerHTML = Math.round(jsonData.main.feels_like)

                document.getElementById('text_desc').innerHTML = jsonData.weather[0].description

                const imageObjURL = URL.createObjectURL(result);
                document.getElementById('icon').src = imageObjURL
            })

    })

const url = 'https://api.openweathermap.org/data/2.5/weather?q=kohima&units=metric&appid=907a421ba77e1e9bd25be2203e161ac9'

async function get() {
    const respone = await fetch(url);
    const data = await respone.json();
    if (data.weather[0].description == "mist") {
        document.body.style.backgroundImage = "url('mist8.jpg')";
        document.style.zIndex = "-1";
    }
    else if (data.weather[0].description == "haze") {
        document.body.style.backgroundImage = "url('haze.jpg')";
        document.style.zIndex = "-1";
    }
    else if (data.weather[0].description == "clear sky") {
        document.body.style.backgroundImage = "url('cl.jpg')";
        document.style.zIndex = "-1";
    }
    else if (data.weather[0].description == "scattered clouds") {
        document.body.style.backgroundImage = "url('sca-cloud.jpg')";
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
}
get();
