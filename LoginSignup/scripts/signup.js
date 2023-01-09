function signupData(n,c,e,p){
    this.name = n;
    this.cnumber = c;
    this.email = e;
    this.password =p
}

function signupForm(){
    event.preventDefault()
    let form = document.getElementById("userSignup")

    let name = form.name.value;
    let number =form.number.value;
    let email = form.email.value;
    let password = form.password.value;

    let u1=new signupData(name,number,email,password)
    let data = JSON.parse(localStorage.getItem("signupData")) || [];
    data.push(u1);
    localStorage.setItem("signupData",JSON.stringify(data))
    console.log(u1);
    window.location.href = "login.html"
}