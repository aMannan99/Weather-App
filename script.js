const inputTxt=document.querySelector('.inputTxt');
var button=document.querySelector('.btn');
const showdata=document.querySelector('.showdata');

const api_key="0f4f53f5c4c2311bb98a974de06970eb";

button.addEventListener('click',()=>{
    const cityName=inputTxt.value;
    //console.log(cityName);
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=${api_key}`)
        .then(res=>res.json())
        .then(data=>{
            //console.log(data);
            inputTxt.value=" ";
            showdata.innerHTML=` 
            <ul>
            <li class="desc">${data.weather[0].description}</li>
            <li class="city">${data.name}</li>
            <li class="temp">${data.main.temp}°C</li>
            </ul>
            `;
        })
})