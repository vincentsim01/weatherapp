const getweatherbutton = document.getElementById('getweatherbutton');
const changetext = document.getElementById('changetext');
const citytextinput = document.getElementById('citytextinput').value;
const textchangecontainer = document.getElementById('textchangecontainer');

async function getweatherfunction(){
    const citytextinput = document.getElementById('citytextinput');
    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citytextinput.value}&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();
    textchangecontainer.classList.remove('hidden');
    changetext.innerHTML = `${data.sys.country} <br> ${data.name} <br> ${data.main.temp} F`;
}

function closetextchangecontainer(){
    textchangecontainer.classList.toggle('hidden');
}

getweatherbutton.addEventListener('click',getweatherfunction);

async function setthreecityone(){
    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();
    document.getElementById('threecityone').innerHTML= `${data.sys.country} <br> ${data.name} <br> ${data.main.temp} F`;
}

setTimeout(setthreecityone(),0);  

async function setthreecitytwo(){
    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();
    document.getElementById('threecitytwo').innerHTML= `${data.sys.country} <br> ${data.name} <br> ${data.main.temp} F`;
}

setTimeout(setthreecitytwo(),0); 


async function setthreecitythree(){
    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();
    document.getElementById('threecitythree').innerHTML= `${data.sys.country} <br> ${data.name} <br> ${data.main.temp} F`;
}

setTimeout(setthreecitythree(),0);  



