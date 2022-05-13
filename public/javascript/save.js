let saveListener = document.getElementById("saveListener");

saveListener.addEventListener("click", function(event) {
    event.preventDefault();

    fetch("/api/users/pokemon", {
        method: 'put',
        body: JSON.stringify({ pokeId: globalPokemonName }),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(() => document.location.replace("/generate"))
    console.log(globalPokemonName);
});