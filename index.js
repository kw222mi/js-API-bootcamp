async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

const writeToConsole = (data) => {
  data.forEach((element) => {
    console.log(element);
  });
};

const renderTheData = (data) => {
  data.forEach((element) => {
    console.log(element);
    createDomElement(element.name);
  });
};

const createDomElement = (data) => {
  let pokemonDiv = document.getElementById("pokemon-div");
  let element = document.createElement("p");
  pokemonDiv.appendChild(element);
  element.innerText = data;
};

const renderFilteredBooks = (books) => {
  books.forEach((element) => {
    if (element.pages < 500) {
      createDomElement(element.title);
    }
  });
};

const renderFilteredVisitors = (visitors) => {
  visitors.forEach((element) => {
    if (element.attending === true) {
      createDomElement(element.name);
    }
  });
};

(async () => {
  let pokemons = await fetchData("https://majazocom.github.io/Data/pokemons.json");
  // writeToConsole(pokemons);
  // renderTheData(pokemons);

  let dogs = await fetchData("https://majazocom.github.io/Data/dogs.json");
  // writeToConsole(dogs);
  // renderTheData(dogs);

  let books = await fetchData("https://majazocom.github.io/Data/books.json");
  // renderFilteredBooks(books)

  let visitors = await fetchData("https://majazocom.github.io/Data/attendees.json");
  renderFilteredVisitors(visitors);
})();
