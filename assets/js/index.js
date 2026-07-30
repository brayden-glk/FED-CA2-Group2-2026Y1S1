// Typewriter (Home page)
let deletingSpeed = 90
let typingSpeed = 170
let pauseTime = 1900
let isDeleting = false
let countLetter = 0
let textNumber = 0
let texts = ["Adventure Awaits", "Discover Singapore", "Explore New Places"]
const typewriter = document.querySelector("#typewriter")

function typewrite(){
    if (textNumber == texts.length){
      textNumber = 0;  
    };
    if (!isDeleting){
        if (countLetter > texts[textNumber].length){
            isDeleting = true
            return setTimeout(typewrite, pauseTime)
        }
        else {
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
            return setTimeout(typewrite, pauseTime)
        }
        else {
            typewriter.textContent = texts[textNumber].slice(0, countLetter)
            countLetter--
            return setTimeout(typewrite, deletingSpeed)
        }
    }
};

if (typewriter) {
    typewrite();
}


// Interactive Map (Home Page)
const places = {
    "changi-airport": {
        title: "Changi Airport",
        description: "One of the world's best airports, known for it's iconic waterfall",
        link: "pages/attractions/attraction1.html"
    },

    "marina-bay-sands": {
        title: "Marina Bay Sands",
        description: "Explore this iconic integrated resort in Singapore, renowned for its distinctive three-tower design topped by the SkyPark, luxury hotel, shopping, dining, entertainment, and infinity pool.",
        link: "pages/attractions/attraction1.html"
    },

    "chinatown": {
        title: "Chinatown",
        description: "Explore Singapore's rich Chinese heritage through historic temples, colorful shophouses, traditional markets, and authentic local cuisine."
    },

    "gardens-by-the-bay": {
        title: "Gardens by the Bay",
        description: "Discover Singapore's iconic nature park featuring the Supertree Grove, stunning waterfront gardens, and impressive conservatories filled with plants from around the world."
    },
    "sentosa": {
        title: "Sentosa",
        description: "Relax on sandy beaches, enjoy thrilling attractions, and visit world-class entertainment destinations on Singapore's premier island resort."
    },

    "orchard": {
        title: "Orchard Road",
        description: "Shop along Singapore's famous retail boulevard, home to luxury boutiques, shopping malls, trendy cafes, and diverse dining experiences."
    }
};



document.querySelectorAll(".hotspot").forEach(hotspot => {
    hotspot.addEventListener("click", function(event){
    const place = event.target.id

    document.querySelector("#title").textContent = places[place].title
    document.querySelector("#description").textContent = places[place].description

    document.querySelector("#popup").classList.remove("hidden")
    document.querySelector("#dark-overlay").classList.remove("opacity-0", "pointer-events-none")
    })
})