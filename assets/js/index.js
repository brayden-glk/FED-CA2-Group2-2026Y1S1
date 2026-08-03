// Typewriter (Home page)
let deletingSpeed = 90
let typingSpeed = 170
let pauseTime = 1900
let isDeleting = false
let countLetter = 0
let textNumber = 0
let texts = ["Adventure Awaits", "Discover Singapore", "Explore New Places"]

const typewriter = document.querySelector("#typewriter")
const cursor = document.querySelector("#cursor")

let blink = setInterval(() => {
    cursor.classList.toggle("opacity-0");
}, 500);

function typewrite(){
    if (textNumber == texts.length){
      textNumber = 0;  
    };

    if (!isDeleting){
        if (countLetter > texts[textNumber].length){
            isDeleting = true

            blink = setInterval(() => {
                cursor.classList.toggle("opacity-0");
            }, 500);

            return setTimeout(typewrite, pauseTime)
        }
        else {
            clearInterval(blink);
            cursor.classList.remove("opacity-0")

            typewriter.textContent = texts[textNumber].slice(0, countLetter)
            countLetter++
            return setTimeout(typewrite, typingSpeed)
        }   
    };
    if (isDeleting){
        if (countLetter < 0){
            textNumber++
            countLetter = 0
            isDeleting = false

             blink = setInterval(() => {
                cursor.classList.toggle("opacity-0");
            }, 500);

            return setTimeout(typewrite, pauseTime)
        }
        else {
            clearInterval(blink);
            cursor.classList.remove("opacity-0")

            typewriter.textContent = texts[textNumber].slice(0, countLetter)
            countLetter--
            return setTimeout(typewrite, deletingSpeed)
        }
    }
};

typewrite();

// Interactive Map (Home Page)
const places = {
    "changi-airport": {
        title: "Changi Airport",
        description: "One of the world's best airports, known for it's iconic waterfall",
        link: "pages/attractions/attraction1.html",
        img: "assets/images/changiairport.jpg"
    },

    "marina-bay-sands": {
        title: "Marina Bay Sands",
        description: "Renowned for its distinctive three-tower design topped by the SkyPark and more",
        link: "pages/attractions/attraction1.html",
    },

    "chinatown": {
        title: "Chinatown",
        description: "Singapore's rich Chinese heritage via historic temples and colorful shophouses",
        link: "pages/culture-heritage/webpage6.html",
    },

    "gardens-by-the-bay": {
        title: "Gardens by the Bay",
        description: "Singapore's iconic nature park featuring the Supertree Grove and stunning waterfront gardens",
        link: "pages/attractions/attraction1.html",
    },
    "sentosa": {
        title: "Sentosa",
        description: "Sandy beaches, thrilling attractions, and world-class entertainment destinations",
        link: "pages/attractions/attraction1.html",
    },

    "orchard": {
        title: "Orchard Road",
        description: "Singapore's famous retail boulevard, home to luxury boutiques, shopping malls, and diverse dining experiences.",
        link: "pages/food-shopping/fs1.html",
    }
};


// Map hotspots and Popup
document.querySelectorAll(".hotspot").forEach(hotspot => {
    hotspot.addEventListener("click", function(event){
    const place = event.target.id

    document.querySelector("#title").textContent = places[place].title
    document.querySelector("#description").textContent = places[place].description
    document.querySelector("#link").setAttribute("href", places[place].link)
    document.querySelector("#img-popup").setAttribute("src", places[place].img)

    document.querySelector("#popup").classList.remove("opacity-0", "scale-90", "pointer-events-none")
    document.querySelector("#popup").classList.add("scale-100")
    document.querySelector("#dark-overlay").classList.remove("opacity-0", "pointer-events-none")
    })
})

document.querySelector("#dark-overlay").addEventListener("click", function(){
    document.querySelector("#popup").classList.add("opacity-0", "scale-90", "pointer-events-none")
    document.querySelector("#popup").classList.remove("scale-100")
    document.querySelector("#dark-overlay").classList.add("opacity-0", "pointer-events-none")
})