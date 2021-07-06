
// navbar buttons variables

const homeBtn = document.querySelector(".home");
const aboutBtn = document.querySelector(".about");
const workBtn = document.querySelector(".work");
const contactBtn = document.querySelector(".contact");

// section variables

const homeSection = document.querySelector("#home-section");
const aboutSection = document.querySelector("#about-section");
const workSection = document.querySelector("#work-section");
const contactSection = document.querySelector("#contact-section")


// making sectons into hidden section except home

aboutSection.style.display = "none";
workSection.style.display = "none";
contactSection.style.display = "none";


// assining functions for nav-buttons through add-eventlistener

// about section slide
aboutBtn.addEventListener("click", function() {
    
    homeSection.style.display = "none";
    aboutSection.style.display = "contents";
    workSection.style.display = "none";
    contactSection.style.display = "none";
})

// work section slide
workBtn.addEventListener("click", function() {

    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    workSection.style.display = "contents";
    contactSection.style.display = "none";
})

// contact section slide
contactBtn.addEventListener("click", function() {

    homeSection.style.display = "none";
    aboutSection.style.display = "none";
    workSection.style.display = "none";
    contactSection.style.display = "contents";
    
})

// work section slide
homeBtn.addEventListener("click", function() {
    
    homeSection.classList.add("animate-slide");


    homeSection.style.display = "contents";
    aboutSection.style.display = "none";
    workSection.style.display = "none";
    contactSection.style.display = "none";

   
})
