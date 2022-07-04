// const API_key = '907a421ba77e1e9bd25be2203e161ac9'

// var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
// var city = 'patna';
// var units = '&units=metric&';
// var apikey = 'appid=907a421ba77e1e9bd25be2203e161ac9';

// var url = api + city + units + apikey;

<p>
    <input type="city" value="patna"></input>
    <button id="submit" onclick="myFunction()">
        <i class="fa fa-search" aria-hidden="true"></i>
    </button>
</p>
function myFunction() {

    var request;
    var input1 = document.getElementById('city');
    var api = 'https://api.openweathermap.org/data/2.5/weather?q=';
    var units = '&units=metric&';
    var apikey = 'appid=907a421ba77e1e9bd25be2203e161ac9';
    var sum = api + input1.value + units + apikey;

    request = new XMLHttpRequest();

    request.open('GET', sum, true);
    request.onload = function () {

        var data = JSON.parse(this.response);
        if (request.status >= 200 && request.status < 400) {
            console.log(data);
        } else {
            console.log(input1.value);
        }
    }

    request.send();
}