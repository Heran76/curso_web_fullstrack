//FETCH (ajax)
//https://reqres.in/
fetch("https://reqres.in/api/users/2")
  .then(response => response.json())
  .then(usuario =>{
    console.log(usuario.data);
  });