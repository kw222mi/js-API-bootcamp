async function logMovies() {
  const response = await fetch(
    "https://majazocom.github.io/Data/pokemons.json"
  );
  const pokemons = await response.json();
  
  pokemons.forEach(element => {
    console.log(element);
    renderTheData(element.name)
  });
}

const renderTheData = (data) => {
    let pokemonDiv = document.getElementById("pokemon-div");
    let element = document.createElement("p")
    pokemonDiv.appendChild(element)
    element.innerText= data

}

logMovies();
