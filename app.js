const form = document.querySelector('weather-form');
const weatherContainer = document.querySelector('#weather-container');

form.addEventListener('submit', function(event){
    event.preventDefault();

    //Get city name from input
    const city = document.querySelector('#city').value;
});