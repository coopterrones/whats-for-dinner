var letsCookButton = document.querySelector('.lets-cook');
var meal = document.querySelectorAll("input[name='course-selection']");
var randomDishDisplay = document.querySelector(".random-dish-display");
var cookpotImg = document.querySelector(".image");
var resultHeader = document.querySelector(".result-header");
var result = document.querySelector(".result");
var clearButton = document.querySelector(".clear");
var addRecipeButton = document.querySelector(".header-button");
var addRecipeFooter = document.querySelector(".add-recipe-footer");
var addNewRecipeButton = document.querySelector(".add-new");
var newRecipe = document.querySelectorAll(".new-recipe");

letsCookButton.addEventListener('click', selectMeal);
clearButton.addEventListener('click', clearResult);
addRecipeButton.addEventListener('click', displayRecipeForm);
addNewRecipeButton.addEventListener('click', addRecipe);

function selectMeal() {
  event.preventDefault();
  var randomSideValue = getRandomIndex(side);
  var randomSide = side[randomSideValue];
  var randomMainValue = getRandomIndex(main);
  var randomMain = main[randomMainValue];
  var randomDessertValue = getRandomIndex(dessert);
  var randomDessert = dessert[randomDessertValue];
  var randomMeal = ``;
    if (meal[0].checked) {
      randomDishDisplay.classList.remove("hidden");
      randomDish = `<p class="result">${randomSide}!</p>`;
      cookpotImg.classList.add("hidden");
      result.classList.remove("hidden");
      randomDishDisplay.innerHTML = randomDish;
    }
    if (meal[1].checked) {
      randomDishDisplay.classList.remove("hidden");
      randomDish = `<p class="result">${randomMain}!</p>`;
      cookpotImg.classList.add("hidden");
      result.classList.remove("hidden");
      randomDishDisplay.innerHTML = randomDish;
    }
    if (meal[2].checked) {
      randomDishDisplay.classList.remove("hidden");
      randomDish = `<p class="result">${randomDessert}!</p>`;
      cookpotImg.classList.add("hidden");
      result.classList.remove("hidden");
      randomDishDisplay.innerHTML = randomDish;
    }
    if (meal[3].checked) {
    randomDishDisplay.classList.remove("hidden");
    randomMeal = `${randomMain} with a side of ${randomSide} and ${randomDessert} for dessert!`
    cookpotImg.classList.add("hidden");
    result.classList.remove("hidden");
    randomDishDisplay.innerHTML = randomMeal;
    }
  dataValidation();
}

function clearResult() {
  randomDishDisplay.classList.add("hidden");
  result.classList.add("hidden");
  cookpotImg.classList.remove("hidden");
}

function dataValidation() {
var inputValue = false;
for (var i = 0; i < meal.length; i++) {
  var radioInput = meal[i];
  if (radioInput.checked == true) {
    inputValue = true;
  }
  }
  if (!inputValue) {
    alert ("Please Choose an meal type!");
    return false;
  }
}

function displayRecipeForm() {
  addRecipeFooter.classList.remove("hidden");
}

function addRecipe() {
  event.preventDefault();
  if (newRecipe[0].value === "side") {
    side.push(newRecipe[1].value)
  } else if (newRecipe[0].value === "main") {
    main.push(newRecipe[1].value)
  } else if (newRecipe[0].value === "dessert") {
    dessert.push(newRecipe[1])
  } else {
    alert ("Not a valid meal type! Please use side, main, or dessert!")
  }
  clearInputs();
}

function clearInputs() {
  newRecipe[0].value = "";
  newRecipe[1].value = "";
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
