let abilitiesList = document.getElementById("abilities");
let pokeDiv = document.getElementById("pokeDetails");
let submitListener = document.getElementById("submitListener");
let globalPokemonName;

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
            console.log("pokeNameData:", pokeNameData.name);
            globalPokemonName = pokeNameData.name.toLowerCase();
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
// Fetch Abilities Function -- Jem
// const fetchPokeAbility = function(pokeName) {
//     let pokeAbilityURL = "https://pokeapi.co/api/v2/pokemon/" + pokeName;
//     fetch(pokeAbilityURL)
//         .then(function(pokeAbilityResponse) {
//             return pokeAbilityResponse.json();
//         })
//         .then(function(pokeAbilityData) {
//             let dataAbility = pokeAbilityData.abilities;
//             let dataFirstAbility = dataAbility[0];
//             let dataSecondAbility = dataAbility[1];
//             let dataThirdAbility = dataAbility[2];
//             //createElement
//             let liTag = document.createElement("li");
//             liTag.textContent =
//                 // a lot of code to capitalize the first letter
//                 dataFirstAbility.ability.name.charAt(0).toUpperCase() +
//                 dataFirstAbility.ability.name.slice(1);
//             //append it to ul List
//             abilitiesList.append(liTag);
//             //createElement
//             let liTag2 = document.createElement("li");
//             liTag2.textContent =
//                 // a lot of code to capitalize the first letter
//                 dataSecondAbility.ability.name.charAt(0).toUpperCase() +
//                 dataSecondAbility.ability.name.slice(1);
//             //append it to ul List
//             abilitiesList.append(liTag2);
//             //createElement
//             let liTag3 = document.createElement("li");
//             liTag3.textContent =
//                 // a lot of code to capitalize the first letter
//                 dataThirdAbility.ability.name.charAt(0).toUpperCase() +
//                 dataThirdAbility.ability.name.slice(1);
//             //append it to ul List
//             abilitiesList.append(liTag3);
//         });
// };

getPokeName();

submitListener.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
    let searchText = document.getElementById("characterName").value;
    let showData = document.getElementById("invisible");
    showData.classList.remove("invisible");
    fetchPokeData(searchText);
    characterName.value = "";
});