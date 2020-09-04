//Query Selectors
var letsCookButton = document.querySelector('.lets-cook');
var meal = document.querySelectorAll("input[name='course-selection']");
var randomDishDisplay = document.querySelector(".random-dish-display");
var cookpotImg = document.querySelector(".image");
var resultHeader = document.querySelector(".result-header");

//Event Listeners
letsCookButton.addEventListener('click', selectMeal);

function selectMeal() {
  event.preventDefault();
  var randomSideValue = getRandomIndex(sides);
  var randomSide = sides[randomSideValue];
  var randomMainValue = getRandomIndex(mains);
  var randomMain = mains[randomMainValue];
  var randomDessertValue = getRandomIndex(desserts);
  var randomDessert = desserts[randomDessertValue];
  if (meal[0].checked) {
    randomDish = `<p class="result">${randomSide}!</p>`;
    cookpotImg.classList.add("hidden");
    resultHeader.classList.remove("hidden");
    randomDishDisplay.innerHTML = randomDish;
  }
  if (meal[1].checked) {
    randomDish = `<p class="result">${randomMain}!</p>`;
    cookpotImg.classList.add("hidden");
    resultHeader.classList.remove("hidden");
    randomDishDisplay.innerHTML = randomDish;
  }
  if (meal[2].checked) {
    randomDish = `<p class="result">${randomDessert}!</p>`;
    cookpotImg.classList.add("hidden");
    resultHeader.classList.remove("hidden");
    randomDishDisplay.innerHTML = randomDish;
  }
}
  // var mealType;
  // for (i = 0; i < meal.length; i++) {
  //   if(meal[i].checked)
  //     mealType = meal[i].value;
  //   }

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
  //use that variable to iterate through the appropriate array
  //if we find a match, return that on the page
  // var value = meal.value;
  // for (i = 0; i < value.length; i++) {
  //
  // }
  //search specific array associated with selection
  //display the selection in the results div
  //hide the cookpot img
