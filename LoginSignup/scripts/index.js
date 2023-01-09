
var movie = [
    {
        name:"JugJugg Jeeyo",
        release_date:"UA/24 Jun, 2022",
        poster :"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jugjugg-jeeyo-et00318143-18-05-2022-08-27-03.jpg",
        retting:"5" ,
    },
    {
        name: "Thor:Love and Thunder" ,
        release_date: "7 Jul, 2022" ,
        poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/thor-love-and-thunder-et00302403-24-05-2022-12-00-43.jpg" ,
        retting:"5" ,
    },
    {
        name: "Jurassic World: Dominion",
        release_date:"UA/10 Jun, 2022" ,
        poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/jurassic-world-dominion-et00112828-21-04-2022-06-44-15.jpg" ,
        retting:"4" ,
    },
    {
        name: "Bhool Bhulaiyaa 2",
        release_date:"UA/20 May, 2022" ,
        poster:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bhool-bhulaiyaa-2-et00109831-16-05-2022-02-13-09.jpg" ,
        retting:"4" ,
    },
    {
        name: "Vikram: Hitlist",
        release_date:"UA/3 Jun, 2022" ,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/vikram-hitlist-et00328993-30-05-2022-05-45-08.jpg",
        retting:"5" ,
    },
    {
        name: "The Black Phone",
        release_date:"A/24 Jun, 2022" ,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/the-black-phone-et00331520-16-06-2022-11-36-41.jpg",
        retting: "3",
    },
    {
        name: "Naadi Dosh",
        release_date:"UA/17 Jun, 2022" ,
        poster:" https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/naadi-dosh-et00328699-16-05-2022-05-57-37.jpg",
        retting: "3",
    },
    {
        name: "777 Charlie",
        release_date: "UA/10 Jun, 2022",
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/777-charlie-et00077150-31-05-2022-11-46-42.jpg",
        retting:"1" ,
    },
    {
        name: "Elvis",
        release_date:"UA/24 Jun, 2022" ,
        poster: "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/elvis-et00323189-10-06-2022-07-14-35.jpg",
        retting: "1",
    },
]


movie.forEach(function(elem){

    let showData = document.getElementById("movies")

    let img = document.createElement("img");
    img.src  = elem.poster;

    let name = document.createElement("p")
    name.innerText = "Name: - "+elem.name;

    let release = document.createElement("p");
    release.innerText ="Released on: - "+ elem.release_date;

    let rate = document.createElement("p")
    rate.innerText = "IMDb rating: - "+ elem.retting;
    let div = document.createElement("div")
    div.append(img,name,release,rate)
   showData.append(div)
})  

function arrenge(){
  let arrenge = document.getElementById("sort")
  
  let select = arrenge.value;

  if(select=== "sort-lh"){
    movie.sort(function(a,b){
        return a.retting- b.retting
    })
    console.log(movie)
    
  } 
  if(select=== "sort-hl"){
    movie.sort(function(a,b){
        return b.retting-a.retting
    })
    console.log(movie)
  }

}
