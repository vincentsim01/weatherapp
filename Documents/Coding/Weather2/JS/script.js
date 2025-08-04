const getweatherbutton = document.getElementById('getweatherbutton');
const changetext = document.getElementById('changetext')

async function getweatherfunction(){
    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=51.48&lon=-0.14&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();

    changetext.innerHTML = `The Temperature in ${data.name}, ${data.sys.country} is ${data.main.temp} F`;

}

getweatherbutton.addEventListener('click',getweatherfunction);