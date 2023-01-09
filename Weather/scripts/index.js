


document.querySelector("#search").onclick= async function (){
   
    let location = document.querySelector(".location").value;
  
    let url= `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=d36ed4bb222484906d044c363511bd87`

    let res = await fetch(url)
    let data =await res.json()
    append(data)
    // console.log(data)

}


function append(data){

    let url = `https://maps.google.com/maps?q=${data.name}&t=k&z=13&ie=UTF8&iwloc=&output=embed`
  
    let mapDetail = document.querySelector(".weatherData");
    mapDetail.innerHTML = null;

    let place = document.createElement("p")
    place.innerText=`Place:- ${data.name}`;
    

    let temp = document.createElement("p")
    temp.innerText =`Temperature:- ${(((data.main.temp)-32)*0.6)}°C`;

    let mintemp = document.createElement("p")
    mintemp.innerText =`Minimum Temp:- ${(((data.main.temp_min)-32)*0.6)}°C`;

    let maxtemp = document.createElement("p")
    maxtemp.innerText =`Maximum Temp:- ${(((data.main.temp_max)-32)*0.6)}°C`;

    let humidity = document.createElement("p")
    humidity.innerText =`Humidity:- ${data.main.humidity} %`;

    let pressure = document.createElement("p")
    pressure.innerText =`Pressure:- ${data.main.pressure} %`;

    let wind = document.createElement("p")
    wind.innerText =`Wind Speed:- ${data.wind.speed} M/s`;

    let weat = document.createElement("p")
    weat.innerText =`Day:- ${data.weather[0].main}`;

    let div = document.createElement("div")

    div.append(place,temp,mintemp,maxtemp,humidity,pressure,wind,weat)
    mapDetail.append(div)
    let frame = document.querySelector(".mapLocation");
    frame.src = url
}

function geolocation(){
    navigator.geolocation.getCurrentPosition(success);
    function success(pos) {
        const crd = pos.coords;
        searchLocationData(crd.latitude,crd.longitude )
    }
}
geolocation();


async function searchLocationData(lat,lon){
   
    let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d36ed4bb222484906d044c363511bd87`

    let res = await fetch(url)
    let data =await res.json()
    append(data)
    // console.log(data)

}



