let loginForm = document.querySelector(".aside__login");
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let loginPassword = document.querySelector("#password");
let asideData = document.querySelector(".aside__data");
let loginName = document.querySelector(".data__name");
let btnlogout = document.querySelector(".data__logout");

loginForm.addEventListener("submit",()=>{
    e.preventDefault();

    //Recoger los valores del formulario
    let name = inputName.value;
    let email = input.value;
    let password = password.value;
   //Comprobar que todo está relleno
   let user = {};
   if(name && email && password){
    //Guardar los datos en un objeto
    user = {name, email, password};
    //Guardar en localorage
    localStorage.setItem("user", JSON.stringify(user));
    //Vaciar el formulario

    loginForm.reset();

    //Mostrar el usuario
   getuser()
   }

});
let getuser = ()=>{
    let myuser = localStorage.getItem("user");

    if(myuser){
        let identity = JSON.parse(myuser);
        loginName.innerHTML = identity.name;
        loginForm.classList.add("aside__login--hide");
        asideData.classList.remove("aside__data--hide");
    }
}
