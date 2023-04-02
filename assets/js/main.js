// METODO GET
async function getUser(){
     var apiUser = await fetch('https://rickandmortyapi.com/api/character')

     var dataJson = await apiUser.json();
     var user = dataJson.results[10];

     var fullName = `${user.name}`;

     const userInfo = `
     <img src="${user.image}">
     <h2> ${user.name}</h2>
     <p>${user.status}</p>
     <p> ${user.gender}</p>

     `

     document.getElementById("user").innerHTML = userInfo;
}