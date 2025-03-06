let loginForm = document.querySelector(".aside__form"); // Cambiado a .aside__form
let inputName = document.querySelector("#name");
let inputEmail = document.querySelector("#email");
let inputPassword = document.querySelector("#pass"); // Cambiado a #pass
let asideData = document.querySelector(".aside__data");
let loginName = document.querySelector(".data__name");
let btnLogout = document.querySelector(".data__logout");

// Función para manejar el evento de submit del formulario

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Hemos entrado");

    // Recoger los valores del formulario
    let name = inputName.value;
    let email = inputEmail.value;
    let password = inputPassword.value;

    // Comprobar que todo está relleno
    if (name && email && password) {
        // Guardar los datos en un objeto
        let user = { name, email, password };

        // Guardar en localStorage
        localStorage.setItem("user", JSON.stringify(user));

        // Vaciar el formulario
        loginForm.reset();

        // Mostrar el usuario
        getUser();
    } else {
        alert("Por favor, rellena todos los campos.");
    }
});

// Función para obtener y mostrar el usuario
let getUser = () => {
    let myUser = localStorage.getItem("user");

    if (myUser) {
        let identity = JSON.parse(myUser);
        loginName.innerHTML = identity.name;
        loginForm.classList.add("aside__login--hide"); // Asegúrate de que esta clase exista en tu CSS
        asideData.classList.remove("aside__data--hide");
    }
};

// Función para cerrar sesión
btnLogout.addEventListener("click", () => {
    localStorage.removeItem("user");
    loginForm.classList.remove("aside__login--hide"); // Asegúrate de que esta clase exista en tu CSS
    asideData.classList.add("aside__data--hide");
    loginName.innerHTML = "";
});

// Cargar el usuario al cargar la página


getUser()