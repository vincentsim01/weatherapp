const getweatherbutton = document.getElementById('getweatherbutton');
const changetext = document.getElementById('changetext');
const citytextinput = document.getElementById('citytextinput').value;
const textchangecontainer = document.getElementById('textchangecontainer');

async function getweatherfunction(){
    const citytextinput = document.getElementById('citytextinput');
    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citytextinput.value}&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();
    textchangecontainer.classList.remove('hidden');


    changetext.innerHTML = `The Temperature in ${data.name}, ${data.sys.country} is ${data.main.temp} F`;

}

function closetextchangecontainer(){
    textchangecontainer.classList.toggle('hidden');
}

getweatherbutton.addEventListener('click',getweatherfunction);