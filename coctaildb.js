const searchFood = () => {
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  searchField.value = "";
  if (searchText == "") {
    const searchError = document.getElementById("search-error");
    searchError.style.display = "block";
  } else {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        displaySearchResult(data.drinks);
      });
  }
};
const displaySearchResult = (drinks) => {
  const displayText = document.getElementById("display-text");
  const searchResult = document.getElementById("search-result");
  if (drinks && drinks.length) {
    drinks.forEach((drink) => {
      const div = document.createElement("div");
      div.classList.add("col");
      div.innerHTML = `
            <div onclick ="loadDrinkDetail('${
              drink.idDrink
            }')" class="card h-100">
            <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${drink.strDrink}</h5>
                <p class="card-text">${drink.strInstructions.slice(0, 250)}</p>
            </div>
            </div>
            `;
      searchResult.appendChild(div);
    });
  } else {
    searchResult.textContent = "";
    displayText.style.display = "block";
  }
};

const loadDrinkDetail = (drinkId) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      displayDrinkDetail(data.drinks[0]);
    });
};
const displayDrinkDetail = (drink) => {
  const drinkDetail = document.getElementById("coctail-detail");
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
    <img src="${drink.strDrinkThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${drink.strDrink}</h5>
      <p class="card-text">${drink.strInstructions.slice(0, 150)}</p>
      <a href="${drink.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>`;
  drinkDetail.appendChild(div);
};
