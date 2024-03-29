let abilitiesList = document.getElementById("abilities");
let pokeDiv = document.getElementById("pokeDetails");
let submitListener = document.getElementById("submitListener");
let globalPokemonName;
// let globalPokeDex; we want the dex entry to save to db

function resetScreen() {
    //need to fill
    abilities.innerHTML = "";
}
// Fetch Pokemon data
let fetchPokeData = function(pokeName) {
    let pokeNameURL =
        "https://pokeapi.co/api/v2/pokemon/" + pokeName.toLowerCase();
    fetch(pokeNameURL)
        .then(function(pokeNameResponse) {
            return pokeNameResponse.json();
        })
        .then(function(pokeNameData) {
            // we can get dex entry like this, we just need to save it in the db
            console.log("pokeNameData:", pokeNameData.id);
            globalPokemonName = pokeNameData.name.toLowerCase();
            // try setting that global here using pokeNameData.id from the response, which is the dex entry
            // globalPokeDex = pokeNameData.id;
            resetScreen();

            // Save local to storage
            // savePokemon(pokeNameData.name);
            //setting up the character name
            let dataTypes = pokeNameData["name"];
            document.getElementById("pokename").textContent =
                "Name: " + dataTypes[0].toUpperCase() + dataTypes.substring(1);
            //Calling the ability fetch based on the character name data
            // fetchPokeAbility(dataTypes);

            let imgElement = document.getElementById("charcterImg");
            console.log("charcterImgURL:", pokeNameData.sprites.front_default);
            imgElement.setAttribute("src", pokeNameData.sprites.front_default);
        });
};
// Display Name Function -
let getPokeName = function() {
    pokeDiv.classList.add("font-bold", "text-xl", "mb-2");
    let pTag = document.createElement("p");
    pTag.setAttribute("id", "pokename");
    pTag.textContent = "Name: ";
    pokeDiv.append(pTag);
};

// Start point
getPokeName();

// Reset page
submitListener.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
    let searchText = document.getElementById("characterName").value;
    let showData = document.getElementById("invisible");
    showData.classList.remove("invisible");
    fetchPokeData(searchText);
    characterName.value = "";
});