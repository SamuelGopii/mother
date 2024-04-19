const donate_button_parent = document.querySelector('.menu');
const donate_button =  donate_button_parent.lastElementChild;

donate_button.style.cssText = 'color:white;padding:1vw';

// header logo redirction to home page functionality
const header_logo = document.querySelector('.logo');

header_logo.addEventListener('click', ()=>{
  window.location.assign('http://127.0.0.1:5500/index.html');
})

// Swiper js functionality
var swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 5000, // milliseconds
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


// our reach functionality start

// Caueses section
// Function to animate a number increase from startValue to targetValue
function volunteers_animateNumberIncrease(startValue, targetValue, duration, elementId) {
  const element = document.querySelector('.volunteers-counter');
  let currentNumber = startValue;
  const totalSteps = duration / 10; // Number of steps to increase the number
  const increment = (targetValue - startValue) / totalSteps;

  // Update the element with the currentNumber
  const updateNumber = () => {
      currentNumber += increment;

      // If the currentNumber exceeds the target value, set it to the target value and stop
      if (currentNumber >= targetValue) {
          currentNumber = targetValue;
          clearInterval(intervalId);
      }

      element.textContent = Math.round(currentNumber);
  };

  // Set an interval to update the number at a fixed rate
  const intervalId = setInterval(updateNumber, duration / totalSteps);
}

// Usage example:

// Add a <span> element to the HTML with an id of "numberDisplay" to display the number
// <span id="numberDisplay">0</span>

// Start the number increase from 0 to 100 in 3 seconds (3000 ms)
window.addEventListener('scroll', function() {
  if(this.window.scrollY>320){
    volunteers_animateNumberIncrease(0, 1015, 1000, 'numberDisplay');
  }else{
    volunteers_animateNumberIncrease(0, 0, 1000, 'numberDisplay');
  }
});


// people section
function people_animateNumberIncrease(startValue, targetValue, duration, elementId) {
  const element = document.querySelector('.people-counter');
  let currentNumber = startValue;
  const totalSteps = duration / 10; // Number of steps to increase the number
  const increment = (targetValue - startValue) / totalSteps;

  // Update the element with the currentNumber
  const updateNumber = () => {
      currentNumber += increment;

      // If the currentNumber exceeds the target value, set it to the target value and stop
      if (currentNumber >= targetValue) {
          currentNumber = targetValue;
          clearInterval(intervalId);
      }

      element.textContent = Math.round(currentNumber);
  };

  // Set an interval to update the number at a fixed rate
  const intervalId = setInterval(updateNumber, duration / totalSteps);
}

// Usage example:

// Add a <span> element to the HTML with an id of "numberDisplay" to display the number
// <span id="numberDisplay">0</span>

// Start the number increase from 0 to 100 in 3 seconds (3000 ms)
window.addEventListener('scroll', function() {
  if(this.window.scrollY>475){
    people_animateNumberIncrease(0, 2348195, 1000, 'numberDisplay');
  }else{
    people_animateNumberIncrease(0, 0, 1000, 'numberDisplay');
  }
});


// Volunteers section
function funds_animateNumberIncrease(startValue, targetValue, duration, elementId) {
  const element = document.querySelector('.funds-counter');
  let currentNumber = startValue;
  const totalSteps = duration / 10; // Number of steps to increase the number
  const increment = (targetValue - startValue) / totalSteps;

  // Update the element with the currentNumber
  const updateNumber = () => {
      currentNumber += increment;

      // If the currentNumber exceeds the target value, set it to the target value and stop
      if (currentNumber >= targetValue) {
          currentNumber = targetValue;
          clearInterval(intervalId);
      }

      element.textContent = Math.round(currentNumber);
  };

  // Set an interval to update the number at a fixed rate
  const intervalId = setInterval(updateNumber, duration / totalSteps);
}

// Usage example:

// Add a <span> element to the HTML with an id of "numberDisplay" to display the number
// <span id="numberDisplay">0</span>

// Start the number increase from 0 to 100 in 3 seconds (3000 ms)
window.addEventListener('scroll', function() {
  if(this.window.scrollY>640){
    funds_animateNumberIncrease(0, 161, 1000, 'numberDisplay');
  }else{
    funds_animateNumberIncrease(0, 0, 1000, 'numberDisplay');
  }
});



// impact functionality start

// initiative section
function initiative_animateNumberIncrease(startValue, targetValue, duration, elementId) {
  const element = document.querySelector('.initiative-counter');
  let currentNumber = startValue;
  const totalSteps = duration / 10; // Number of steps to increase the number
  const increment = (targetValue - startValue) / totalSteps;

  // Update the element with the currentNumber
  const updateNumber = () => {
      currentNumber += increment;

      // If the currentNumber exceeds the target value, set it to the target value and stop
      if (currentNumber >= targetValue) {
          currentNumber = targetValue;
          clearInterval(intervalId);
      }

      element.textContent = Math.round(currentNumber);
  };

  // Set an interval to update the number at a fixed rate
  const intervalId = setInterval(updateNumber, duration / totalSteps);
}

// Usage example:

// Add a <span> element to the HTML with an id of "numberDisplay" to display the number
// <span id="numberDisplay">0</span>

// Start the number increase from 0 to 100 in 3 seconds (3000 ms)
window.addEventListener('scroll', function() {
  if(this.window.scrollY>2280){
    initiative_animateNumberIncrease(0, 1425, 1000, 'numberDisplay');
  }else{
    initiative_animateNumberIncrease(0, 0, 1000, 'numberDisplay');
  }
});


// health camp section
function healthCamp_animateNumberIncrease(startValue, targetValue, duration, elementId) {
  const element = document.querySelector('.health-camp-counter');
  let currentNumber = startValue;
  const totalSteps = duration / 10; // Number of steps to increase the number
  const increment = (targetValue - startValue) / totalSteps;

  // Update the element with the currentNumber
  const updateNumber = () => {
      currentNumber += increment;

      // If the currentNumber exceeds the target value, set it to the target value and stop
      if (currentNumber >= targetValue) {
          currentNumber = targetValue;
          clearInterval(intervalId);
      }

      element.textContent = Math.round(currentNumber);
  };

  // Set an interval to update the number at a fixed rate
  const intervalId = setInterval(updateNumber, duration / totalSteps);
}

// Usage example:

// Add a <span> element to the HTML with an id of "numberDisplay" to display the number
// <span id="numberDisplay">0</span>

// Start the number increase from 0 to 100 in 3 seconds (3000 ms)
window.addEventListener('scroll', function() {
  if(this.window.scrollY>2280){
    healthCamp_animateNumberIncrease(0, 1425, 1000, 'numberDisplay');
  }else{
    healthCamp_animateNumberIncrease(0, 0, 1000, 'numberDisplay');
  }
});


// refresh shelter counter section
function refreshShelterCounter_animateNumberIncrease(startValue, targetValue, duration, elementId) {
  const element = document.querySelector('.refresh-shelter-counter');
  let currentNumber = startValue;
  const totalSteps = duration / 10; // Number of steps to increase the number
  const increment = (targetValue - startValue) / totalSteps;

  // Update the element with the currentNumber
  const updateNumber = () => {
      currentNumber += increment;

      // If the currentNumber exceeds the target value, set it to the target value and stop
      if (currentNumber >= targetValue) {
          currentNumber = targetValue;
          clearInterval(intervalId);
      }

      element.textContent = Math.round(currentNumber);
  };

  // Set an interval to update the number at a fixed rate
  const intervalId = setInterval(updateNumber, duration / totalSteps);
}

// Usage example:

// Add a <span> element to the HTML with an id of "numberDisplay" to display the number
// <span id="numberDisplay">0</span>

// Start the number increase from 0 to 100 in 3 seconds (3000 ms)
window.addEventListener('scroll', function() {
  if(this.window.scrollY>2594){
    refreshShelterCounter_animateNumberIncrease(0, 1425, 1000, 'numberDisplay');
  }else{
    refreshShelterCounter_animateNumberIncrease(0, 0, 1000, 'numberDisplay');
  }
});


// stationary counter counter section
function stationaryCounter_animateNumberIncrease(startValue, targetValue, duration, elementId) {
  const element = document.querySelector('.stationary-counter');
  let currentNumber = startValue;
  const totalSteps = duration / 10; // Number of steps to increase the number
  const increment = (targetValue - startValue) / totalSteps;

  // Update the element with the currentNumber
  const updateNumber = () => {
      currentNumber += increment;

      // If the currentNumber exceeds the target value, set it to the target value and stop
      if (currentNumber >= targetValue) {
          currentNumber = targetValue;
          clearInterval(intervalId);
      }

      element.textContent = Math.round(currentNumber);
  };

  // Set an interval to update the number at a fixed rate
  const intervalId = setInterval(updateNumber, duration / totalSteps);
}

// Usage example:

// Add a <span> element to the HTML with an id of "numberDisplay" to display the number
// <span id="numberDisplay">0</span>

// Start the number increase from 0 to 100 in 3 seconds (3000 ms)
window.addEventListener('scroll', function() {
  if(this.window.scrollY>2594){
    stationaryCounter_animateNumberIncrease(0, 1425, 1000, 'numberDisplay');
  }else{
    stationaryCounter_animateNumberIncrease(0, 0, 1000, 'numberDisplay');
  }
});


// latest news sliding functionality
document.addEventListener("DOMContentLoaded", function() {
  const slidesContainer = document.querySelector('.latest-news-boxes');
  const slideWidth = document.querySelector('.latest-news-boxes-slide').offsetWidth;
  const slideCount = document.querySelectorAll('.latest-news-boxes-slide').length;
  const slidesToShow = 4;
  let currentIndex = 0;

  function moveToNextSlide() {
    currentIndex++;
    if (currentIndex >= slideCount - slidesToShow + 1) {
      currentIndex = 0;
    }
    const offset = -currentIndex * slideWidth;
    slidesContainer.style.transform = `translateX(${offset}px)`;
  }

  setInterval(moveToNextSlide, 3000); // Auto-slide every 3 seconds
});

// drop downs functionalities
// who drop down menu

const who_drop_trigger = document.querySelector('.who-drop-trigger');
const who_drop_down_menu = document.querySelector('.who-drop-down-menu');

document.addEventListener('mouseover', (e)=>{
  if(e.target == who_drop_trigger){
    who_drop_down_menu.style.display = 'flex';
  }
})

document.addEventListener('click', (e)=>{
  if(e.target == who_drop_trigger || e.target == who_drop_down_menu){
    who_drop_down_menu.style.display = 'flex';
  }else{
    who_drop_down_menu.style.display = 'none';
  }

  console.log(e.target);
})


// what drop down menu

const what_drop_trigger = document.querySelector('.what-drop-trigger');
const what_drop_down_menu = document.querySelector('.what-drop-down-menu');

document.addEventListener('mouseover', (e)=>{
  if(e.target == what_drop_trigger){
    what_drop_down_menu.style.display = 'flex';
  }
})

document.addEventListener('click', (e)=>{
  if(e.target == what_drop_trigger || e.target == what_drop_down_menu){
    what_drop_down_menu.style.display = 'flex';
  }else{
    what_drop_down_menu.style.display = 'none';
  }

  console.log(e.target);
})


// how to help us drop down menu

const how_drop_trigger = document.querySelector('.how-drop-trigger');
const how_drop_down_menu = document.querySelector('.how-drop-down-menu');

document.addEventListener('mouseover', (e)=>{
  if(e.target == how_drop_trigger){
    how_drop_down_menu.style.display = 'flex';
  }
})

document.addEventListener('click', (e)=>{
  if(e.target == how_drop_trigger || e.target == how_drop_down_menu){
    how_drop_down_menu.style.display = 'flex';
  }else{
    how_drop_down_menu.style.display = 'none';
  }

  console.log(e.target);
})

// press centre drop down menu

const press_drop_trigger = document.querySelector('.press-drop-trigger');
const press_drop_down_menu = document.querySelector('.press-drop-down-menu');

document.addEventListener('mouseover', (e)=>{
  if(e.target == press_drop_trigger){
    press_drop_down_menu.style.display = 'flex';
  }
})

document.addEventListener('click', (e)=>{
  if(e.target == press_drop_trigger || e.target == press_drop_down_menu){
    press_drop_down_menu.style.display = 'flex';
  }else{
    press_drop_down_menu.style.display = 'none';
  }

  console.log(e.target);
})



// Home Page Animations




// team page functiona;ities

// team carousel 
// Get references to DOM elements
const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let currentIndex = 0;
const slideWidth = carousel.clientWidth / 3; // 3 slides displayed at a time

// Auto-slide interval
let autoSlideInterval = setInterval(nextSlide, 3000);

// Function to slide to the next set of slides
function nextSlide() {
    if (currentIndex >= carousel.children.length - 3) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    updateCarousel();
}

// Function to slide to the previous set of slides
function prevSlide() {
    if (currentIndex <= 0) {
        currentIndex = carousel.children.length - 3;
    } else {
        currentIndex--;
    }
    updateCarousel();
}

// Function to update the carousel position
function updateCarousel() {
    const translateX = -currentIndex * slideWidth;
    carousel.style.transform = `translateX(${translateX}px)`;
}

// Event listeners for prev and next buttons
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// Pause auto-slide when hovering over the carousel
carousel.addEventListener('mouseenter', () => {
    clearInterval(autoSlideInterval);
});

// Resume auto-slide when leaving the carousel
carousel.addEventListener('mouseleave', () => {
    autoSlideInterval = setInterval(nextSlide, 3000);
});








// footer functionalities
const dt = new Date();
const year = dt.getFullYear();

const Date_Span = document.querySelector('.copy-right-year');
Date_Span.innerHTML = `${year}`;



