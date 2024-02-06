async function fetchData(url) {
  const response = await fetch(
    `${url}`
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

fetchData("https://majazocom.github.io/Data/pokemons.json");
fetchData("https://majazocom.github.io/Data/dogs.json");
