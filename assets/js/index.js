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
        description: "One of the world's best airports, knwon for it's iconic waterfall"
    },

    "marina-bay-sands": {
        title: "Marina Bay Sands",
        description: "Iconic hotel"
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
}

const infoBox = document.getElementById("infoBox")
const title = document.getElementById("title")
const description = document.getElementById("description")
const closeInfo = document.getElementById("closeInfo")
let infoBoxTimer;

document.querySelectorAll(".hotspot").forEach(hotspot => {
    function showPlace() {
        window.clearTimeout(infoBoxTimer)
        const place = hotspot.dataset.place
        title.textContent = places[place].title
        description.textContent = places[place].description

        infoBox.classList.remove("hidden")
        requestAnimationFrame(() => infoBox.classList.remove("scale-95", "opacity-0"))
    }

    hotspot.addEventListener("click", showPlace)
    hotspot.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault()
            showPlace()
        }
    })
})

function hideInfoBox() {
    infoBox.classList.add("scale-95", "opacity-0")
    infoBoxTimer = window.setTimeout(() => infoBox.classList.add("hidden"), 300)
}

if (closeInfo) {
    closeInfo.addEventListener("click", hideInfoBox)
}

document.addEventListener("keydown", event => {
    if (event.key === "Escape" && infoBox && !infoBox.classList.contains("hidden")) hideInfoBox()
})