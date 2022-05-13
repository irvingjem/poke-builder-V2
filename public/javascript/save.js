// const { getEventListeners } = require("mysql2/typings/mysql/lib/Connection");

let saveListener = document.getElementById("saveListener");

saveListener.addEventListener("click", function(event) {
    event.preventDefault();
    // fetch from API to save name with UserID
    fetch("/api/users/pokemon", {
        method: 'put',
        body: JSON.stringify({ pokeId: globalPokemonName }),
        headers: {
            'Content-Type': 'application/json'
        } // user save redirect
    }).then(() => document.location.replace("/generate/"))
    console.log(globalPokemonName);
});


// getEventListeners.addEventListener('click', function(event) {
//     fetch('/', {
//         method: 'get',
//         body: "" ,
//         headers: {
//             'Content-Type': 'application/json'
//     })
// })