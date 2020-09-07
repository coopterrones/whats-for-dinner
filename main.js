//Query Selectors
var letsCookButton = document.querySelector('.lets-cook');
var meal = document.querySelectorAll("input[name='course-selection']");
var randomDishDisplay = document.querySelector(".random-dish-display");
var cookpotImg = document.querySelector(".image");
var resultHeader = document.querySelector(".result-header");
var result = document.querySelector(".result");
var clearButton = document.querySelector(".clear");


//Event Listeners
letsCookButton.addEventListener('click', selectMeal);
clearButton.addEventListener('click', clearResult);

function selectMeal() {
  event.preventDefault();
  var randomSideValue = getRandomIndex(sides);
  var randomSide = sides[randomSideValue];
  var randomMainValue = getRandomIndex(mains);
  var randomMain = mains[randomMainValue];
  var randomDessertValue = getRandomIndex(desserts);
  var randomDessert = desserts[randomDessertValue];
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
}

//Clear button functionality
//On clear button click, reset the result display window to cookpot img.
//Clear button event listener and DOM
//clearResult function should add hidden to section random-dish-randomDishDisplay
//Should remove hidden from the cookpot image
//add hidden to clear button on click
function clearResult() {
  randomDishDisplay.classList.add("hidden");
  result.classList.add("hidden");
  cookpotImg.classList.remove("hidden");

}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
