const getweatherbutton = document.getElementById('getweatherbutton');
const changetext = document.getElementById('changetext');
const citytextinput = document.getElementById('citytextinput').value;
const textchangecontainer = document.getElementById('textchangecontainer');

async function getweatherfunction(){
    const citytextinput = document.getElementById('citytextinput');

    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${citytextinput.value}&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();
    textchangecontainer.classList.remove('hidden');
    changetext.innerHTML = `
        <div class='border-white'>
            <img class='w-[20px] mx-auto' src='./asset/${data.sys.country}.png'>
            <br>
            <p >${data.sys.country}</p>
            <br> 
            <p class='text-2xl'>${data.name} </p>
            <br> 
            ${data.main.temp} F
        </div>

        `;
}

async function getpollutionlatlon(){
    const textpollution = document.getElementById('textpollution');
    const textpollutioncontainer = document.getElementById('textpollutioncontainer');
    const lat = document.getElementById('latinput').value;
    const lon = document.getElementById('loninput').value;
    const pollutionlatlon = await fetch(`http://api.openweathermap.org/data/2.5/air_pollution?lat=${lat}&lon=${lon}&appid=286ad2f78fee5038e5f4c39b2c60a946`);
    const data = await pollutionlatlon.json();
    textpollutioncontainer.classList.remove('hidden');
    textpollution.innerHTML=`
    <div class='w-[70%] flex justify-center items-center mx-auto  border border-white relative '>
   
    <table class='w-[70%] text-center mx-auto'>
     <button class="absolute top-0 right-0 cursor-pointer" onclick="closetextpollutioncontainer()"><i class="fa-solid fa-circle-xmark"></i></button>
    <tr>
    <th>Chemical</th>
    <th>Concentration</th>
    </tr>
    <tr>
    <td>
    CO
    </td>
    <td>
    ${data.list[0].components.co}
    </td>
    </tr>
    <tr>
    <td>
    NO
    </td>
    <td>
    ${data.list[0].components.no}
    </td>
    </tr>
    <tr>
    <td>
    NO2
    </td>
    <td>
    ${data.list[0].components.no2}
    </td>
    </tr>
    <tr>
    <td>
    O3
    </td>
    <td>
    ${data.list[0].components.o3}
    </td>
    </tr>
    </table>
    </div>`;
}


function closetextchangecontainer(){
    textchangecontainer.classList.toggle('hidden');
}

function closetextpollutioncontainer(){
    const textpollutioncontainer = document.getElementById('textpollutioncontainer');
    textpollutioncontainer.classList.add('hidden')

}

getweatherbutton.addEventListener('click',getweatherfunction);

async function setthreecityone(){
    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Jakarta&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();
    document.getElementById('threecityone').innerHTML= `<img src="./asset/id.png" class="w-[20px] rounded-full border border-white shadow-3xl mx-auto"></img><br>${data.sys.country} <br> <b>${data.name}</b> <br> ${data.main.temp} F`;
}

setTimeout(setthreecityone(),0);  

async function setthreecitytwo(){
    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Copenhagen&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();
    document.getElementById('threecitytwo').innerHTML= `<img src="./asset/dk.png" class="w-[20px] rounded-full border border-white shadow-3xl mx-auto"></img><br>${data.sys.country} <br> <b>${data.name}</b> <br> ${data.main.temp} F`;
}

setTimeout(setthreecitytwo(),0); 


async function setthreecitythree(){
    const weatherdata = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Amsterdam&appid=286ad2f78fee5038e5f4c39b2c60a946`)
    const data = await weatherdata.json();
    document.getElementById('threecitythree').innerHTML= `<img src="./asset/nl.png" class="w-[20px] rounded-full border border-white shadow-3xl mx-auto"></img><br>${data.sys.country} <br> <b>${data.name}</b> <br> ${data.main.temp} F`;
}

setTimeout(setthreecitythree(),0);  

const bannerbackgroundimage = [ 'url("./asset/kinderdijk2..jpg")', 'url("./asset/jizhaigou2.jpg")', 'url("./asset/grandcanyon.jpg")', 'url("./asset/Harbin-4.jpg")', 'url("./asset/rinjani.jpg")', 'url("./asset/interlaken.jpg")', 'url("./asset/halongbay.jpg")', 'url("./asset/iceland.jpg")', 'url("./asset/aurora.jpg")']
let currentIndex=0;

function changebannerbackground(){

    const mainbanner = document.getElementById('mainbanner');
    mainbanner.style.backgroundImage = bannerbackgroundimage[currentIndex];
    currentIndex = (currentIndex + 1) % bannerbackgroundimage.length;

}

setInterval(changebannerbackground,3000);

changebannerbackground();


const loveword = ['LOVE', 'CARE', 'REMEMBER', 'DREAM OF', 'LIKE', 'PROMOTE', 'RECOMMEND', 'SEARCH FOR', 'FIGHT FOR', 'CHERISH', 'CLING ON', 'TRUST', 'ADORE', 'SEEK FOR', 'BELIEVE IN', 'LOOK FORWARD TO', 'CONSIDER HOME', 'HOPE', 'BRING WARMTH'];


let changeloveindex = 0;

function changelovefunction(){
    let changelove = document.getElementById('changelove');
    changelove.innerHTML = loveword[changeloveindex];
    changeloveindex = (changeloveindex+1)% loveword.length;
}

setInterval(changelovefunction,1000);

changelovefunction();


