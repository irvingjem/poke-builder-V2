var abilitiesList = document.getElementById("abilities");
let pokeDiv = document.getElementById("pokeDetails");
var submitListener = document.getElementById("submitListener");

// Grab pokemon name / and image
// //After installing pokepromise(or whatever they call it) grab info from npm package
// router.get('/:pokeid', (req, res) => {    

//     //Grab pokemon name from URL params
//     P.getPokemonByName(req.params.pokeid)
//     //response.JSON
//     .then((response) => {
//         res.send(response);
//     })
//     //If catch any errors a cheeky response is given
//     .catch((error) => {
//         console.log('Whoa, thats not supposed to happen: ', error);
//     })

// });
// //END



function resetScreen() {
    //need to fill
    abilities.innerHTML = "";
}
// Display Name Function -
let getPokeName = function() {
    pokeDiv.classList.add("font-bold", "text-xl", "mb-2");
    var pTag = document.createElement("p");
    pTag.setAttribute("id", "pokename");
    pTag.textContent = "Name: ";
    pokeDiv.append(pTag);
};
// Fetch Abilities Function -- Jem

var fetchPokeAbility = function(pokeName) {
    var pokeAbilityURL = "https://pokeapi.co/api/v2/pokemon/" + pokeName;
    fetch(pokeAbilityURL)
        .then(function(pokeAbilityResponse) {
            return pokeAbilityResponse.json();
        })
        .then(function(pokeAbilityData) {
            var dataAbility = pokeAbilityData.abilities;
            console.log("pokeAbilityData", pokeAbilityData.abilities);
            var dataFirstAbility = dataAbility[0];
            var dataSecondAbility = dataAbility[1];
            var dataThirdAbility = dataAbility[2];
            console.log("first", dataFirstAbility, "second", dataSecondAbility);
            //createElement
            var liTag = document.createElement("li");
            liTag.textContent =
                // a lot of code to capitalize the first letter
                dataFirstAbility.ability.name.charAt(0).toUpperCase() +
                dataFirstAbility.ability.name.slice(1);
            //append it to ul List
            abilitiesList.append(liTag);
            //createElement
            var liTag2 = document.createElement("li");
            liTag2.textContent =
                // a lot of code to capitalize the first letter
                dataSecondAbility.ability.name.charAt(0).toUpperCase() +
                dataSecondAbility.ability.name.slice(1);
            //append it to ul List
            abilitiesList.append(liTag2);
            //createElement
            var liTag3 = document.createElement("li");
            liTag3.textContent =
                // a lot of code to capitalize the first letter
                dataThirdAbility.ability.name.charAt(0).toUpperCase() +
                dataThirdAbility.ability.name.slice(1);
            //append it to ul List
            abilitiesList.append(liTag3);
        });
};
getPokeName();

submitListener.addEventListener("submit", function(event) {
    event.preventDefault();
    // var searchText = document.getElementById("characterName").value;
    var showData = document.getElementById("invisible");
    showData.classList.remove("invisible");
});