


// let electronicUrl=`https://fakestoreapi.com/products/7`
let allUrl = 'https://dummyjson.com/products'
async function data (){
    let res = await fetch(allUrl)
    let data = await res.json()
    append(data.products)
    console.log(data.products)
}
data()

let append = (data)=>{
    let box = document.querySelector(".cartBox")
    
    data.forEach((elem, index) => {
        
        let imgbox = document.createElement("div")
        imgbox.setAttribute("class","slider")
        let img = document.createElement("img")
        img.setAttribute("class","")
        img.src = elem.thumbnail;      
        let pbox = document.createElement("div")
        pbox.setAttribute("class","detail")
        let brand = document.createElement("p")
        brand.innerHTML = `Brand:- ${elem.brand}`;
        let category = document.createElement("p")
        category.innerHTML = `Category:- ${elem.category}`;
        let discription = document.createElement("p")
        discription.innerHTML = `De:- ${elem.description}`;
        let discountP = document.createElement("p")
        discountP.innerHTML = `Discount:- ${elem.discountPercentage} %`;
        let rating = document.createElement("p")
        rating.innerHTML = `Rating:- ${elem.rating}`;
        let stock = document.createElement("p")
        stock.innerHTML = `In Stock:- ${elem.stock}`;
        let title = document.createElement("p")
        title.innerHTML = `Title:- ${elem.title}`;
        imgbox.append(img)
        let btn = document.createElement("button")
        btn.setAttribute("class","cartbtn")
        btn.innerHTML = "Add To Cart"
        let div = document.createElement("div")
        discription.innerHTML = elem.description;
        pbox.append(rating,stock,brand,title,discountP,category,discription)
        div.append(imgbox,pbox,btn)
      box.append(div);
    });
}
 
$(function(){
    $(".slider").bxSlider({
        auto:true,
        controls:true,
        pause:2000,
        
    })
})

let windows = document.querySelector(".log_in")
let windows2 =document.querySelector(".sign")
let loginWindow = document.querySelector(".wrap-3")
let signWindow = document.querySelector(".wrap-4")


windows.addEventListener("click",function(e){
    e.preventDefault();
     loginWindow.style.display = "block"
})


windows2.addEventListener("click",function(e){
    e.preventDefault();
    signWindow.style.display = "block"
})

document.querySelector(".close").addEventListener("click",function(){
    loginWindow.style.display= "none"
    signWindow.style.display = "none"
})

window.onclick = function(event){
    if(event.target == windows ){
        loginWindow.style.display = "none";
    }
    if(event.target == windows2){
        signWindow.style.display = "none";
    }
}

