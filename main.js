//Query Selectors
var letsCookButton = document.querySelector('.lets-cook');
var meal = document.querySelectorAll("input[name='course-selection']");
var randomDishDisplay = document.querySelector(".random-dish-display");
var cookpotImg = document.querySelector(".image");
var resultHeader = document.querySelector(".result-header");
var result = document.querySelector(".result");

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
      result.classList.remove("hidden");
      randomDishDisplay.innerHTML = randomDish;
    }
    if (meal[1].checked) {
      randomDish = `<p class="result">${randomMain}!</p>`;
      cookpotImg.classList.add("hidden");
      result.classList.remove("hidden");
      randomDishDisplay.innerHTML = randomDish;
    }
    if (meal[2].checked) {
      randomDish = `<p class="result">${randomDessert}!</p>`;
      result.classList.remove("hidden");
      randomDishDisplay.innerHTML = randomDish;
    }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
