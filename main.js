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
var recipeTypeField = document.getElementById("recipe-type");
var recipeNameField = document.getElementById("recipe-name");

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
  var type = recipeTypeField.value.toLowerCase();
  var name = recipeNameField.value.toLowerCase();
  if (type == "side" || "sides" || "side dish") {
    side.push(name);
  }
  if (type == "main" || "main dish" || "mains") {
    main.push(name);
  }
  if (type == "dessert" || "desserts" || "dessert dish"){
    dessert.push(name);
  }
    recipeTypeField.value = "";
    recipeNameField.value = "";
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
