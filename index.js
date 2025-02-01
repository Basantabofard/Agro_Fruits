/*the fade in*/
const faders = document.querySelectorAll('.fade-in')
const sliders= document.querySelectorAll(".slide-in");

const appearOptions={
  threshold: 0,
  rootMargin:"0px 0px -250px 0px"
};
const appearOnScroll = new IntersectionObserver
(function(entries, appearOnScroll) {
entries.forEach(entry => {
  if (!entry.isIntersecting){
    return;
  }else{
    entry.target.classList.add('appear');
    appearOnScroll.unobserve(entry.target);
  }
})
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
})

sliders.forEach(slider =>{
  appearOnScroll.observe(slider);
})

//the typing code
var typed = new Typed(".auto-type",{
  strings: [" Discover New Amazing Grocery Deal"],
  typeSpeed:100,
 // backSpeed:100,
  loop: true
})

//the welcome animation

let spanTexts = document.getElementsByTagName("span");

window.onload = function(){
  for(spanText of spanTexts){
    spanText.classList.add("active");
    
  }
}

//sidemenu

function openmenu() {
  document.getElementById("sidemenu").classList.add("active");
}

function closemenu() {
  document.getElementById("sidemenu").classList.remove("active");
}


    
    
 

// to make the navbar for scroll events
var lastScrollTop = 0;
var navbar = document.getElementById("menu");


window.addEventListener('scroll', function () {
    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Check if the scroll position is greater than the height of the header
    if (scrollTop > navbar.offsetHeight) {
        navbar.classList.add("fixed"); // Add 'fixed' class to navbar
    } else {
        navbar.classList.remove("fixed"); // Remove 'fixed' class when at the top
    }

    // Optional: Add scroll hide/show behavior for the navbar (like in your original code)
    if (scrollTop > lastScrollTop) {
        navbar.style.top = "-80px"; // Hide navbar when scrolling down
    } else {
        navbar.style.top = "0"; // Show navbar when scrolling up
    }

    lastScrollTop = scrollTop; // Update last scroll position
});




//googletranslate
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {pageLanguage: 'en'},
    'google_translate_element'
  );
}



 





// Select DOM elements
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const products = document.querySelectorAll(".product");

// Filter function
function filterProducts() {
  const categoryValue = categoryFilter.value;
  const priceValue = priceFilter.value;

  // Loop through all products
  products.forEach((product) => {
    const productCategory = product.dataset.category;
    const productPrice = product.dataset.price;

    // Check category match
    const categoryMatch = categoryValue === "all" || productCategory === categoryValue;

    // Check price match
    let priceMatch = false;
    if (priceValue === "all") {
      priceMatch = true;
    } else if (priceValue === "low" && productPrice === "low") {
      priceMatch = true;
    } else if (priceValue === "medium" && productPrice === "medium") {
      priceMatch = true;
    } else if (priceValue === "high" && productPrice === "high") {
      priceMatch = true;
    }

    // Show or hide product
    if (categoryMatch && priceMatch) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Add event listeners to filters
categoryFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);

// Select DOM elements
const searchInput = document.getElementById("searchInput");

// Search function
function searchProducts() {
  const searchTerm = searchInput.value.toLowerCase();

  // Loop through all products
  products.forEach((product) => {
    const productName = product.querySelector("h3").textContent.toLowerCase();

    // Check if product name includes search term
    if (productName.includes(searchTerm)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

// Add event listener to the search input
searchInput.addEventListener("input", searchProducts);

