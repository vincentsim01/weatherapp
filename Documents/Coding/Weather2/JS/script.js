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
    document.getElementById('threecityone').innerHTML= `<img src="./asset/indonesia.png" class="w-[20px] rounded-full border border-white shadow-3xl mx-auto"></img><br>${data.sys.country} <br> <b>${data.name}</b> <br> ${data.main.temp} F`;
}

setTimeout(setthreecityone(),0);  

async function setthreecitytwo(){
    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();
    document.getElementById('threecitytwo').innerHTML= `<img src="./asset/denmark.png" class="w-[20px] rounded-full border border-white shadow-3xl mx-auto"></img><br>${data.sys.country} <br> <b>${data.name}</b> <br> ${data.main.temp} F`;
}

setTimeout(setthreecitytwo(),0); 


async function setthreecitythree(){
    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();
    document.getElementById('threecitythree').innerHTML= `<img src="./asset/netherlands.png" class="w-[20px] rounded-full border border-white shadow-3xl mx-auto"></img><br>${data.sys.country} <br> <b>${data.name}</b> <br> ${data.main.temp} F`;
}

setTimeout(setthreecitythree(),0);  

const bannerbackgroundimage = [kinderdijk.png, jiuzhaigou.jpg, grandcanyon.jpg]

function changebannerbackground(){
    const mainbanner = document.getElementById('mainbanner');
    
}

