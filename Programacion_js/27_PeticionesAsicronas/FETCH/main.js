//FETCH (ajax)
//https://reqres.in/

let idUser = 3;


fetch("https://reqres.in/api/users/"+idUser)
  .then(response => response.json())
  .then(usuario =>{
    console.log(usuario.data);
    mostrarUsuario(usuario.data)
  })
  .catch(error =>{
    console.log("Error al pedir los datos del servidor", error)
  });

  function mostrarUsuario(user){
    let caja = document.querySelector("#user");
    caja.innerHTML = `
    <h2>${user.first_name} ${user.last_name}</h2>
    <img src ="${user.avatar}"/>
    
    `;
  }