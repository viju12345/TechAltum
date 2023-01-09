function loginSubmit(){
    event.preventDefault()
       
        let data = JSON.parse(localStorage.getItem("signupData"))

        let login = document.getElementById("userLogin")

        let loginemail = login.loginEmail.value;
        let loginpassword = login.loginPassword.vlaue;
        console.log(loginpassword)

        if(loginemail===data[0].email ){
            alert("Login Succesfully")
           window.location.href="index.html"
        }
        else{
            alert("Please check your email and password")
        }
}