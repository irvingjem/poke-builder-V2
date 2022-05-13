let saveListener = document.getElementById("saveListener");

saveListener.addEventListener("click", function (event) {
  event.preventDefault();

  console.log(globalPokemonName);
});
