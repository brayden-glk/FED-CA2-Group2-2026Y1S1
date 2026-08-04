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

// Destination card stack
// const destinations = [
//     {
//         name: "Chinatown",
//         image: "assets/images/chinatown.jpeg",
//         link: "pages/culture-heritage/heritage-districts.html"
//     },
//     {
//         name: "Sentosa",
//         image: "assets/images/banner.jpeg",
//         link: "pages/attractions/iconic-landmarks.html"
//     },
//     {
//         name: "Marina Bay",
//         image: "assets/images/bridgebanner.jpeg",
//         link: "pages/attractions/iconic-landmarks.html"
//     },
//     {
//         name: "Little India",
//         image: "assets/images/littleindia.jpg",
//         link: "pages/culture-heritage/heritage-districts.html"
//     },
//     {
//         name: "Kampong Gelam",
//         image: "assets/images/kampong.jpg",
//         link: "pages/culture-heritage/heritage-districts.html"
//     }
// ]

// const cardStack = document.querySelector("#card-stack")
// const stackPrev = document.querySelector("#stack-prev")
// const stackNext = document.querySelector("#stack-next")
// const stackDots = document.querySelector("#stack-dots")
// const stackLink = document.querySelector("#stack-link")

// let activeStackIndex = 0

// function renderCardStack() {
//     cardStack.innerHTML = ""

//     destinations.forEach((place, index) => {
//         const offset = (index - activeStackIndex + destinations.length) % destinations.length

//         const card = document.createElement("article")
//         card.className = "card-stack-item absolute left-1/2 top-1/2 w-[220px] overflow-hidden rounded-2xl border border-white/40 bg-white shadow-lg sm:w-[240px]"

//         let transform = "translate(-50%, -50%) scale(0.88)"
//         let opacity = "0"
//         let zIndex = "0"

//         if (offset === 0) {
//             transform = "translate(-50%, -50%) scale(1) rotate(0deg)"
//             opacity = "1"
//             zIndex = "30"
//         } else if (offset === 1) {
//             transform = "translate(calc(-50% + 52px), -50%) scale(0.94) rotate(4deg)"
//             opacity = "0.92"
//             zIndex = "20"
//         } else if (offset === destinations.length - 1) {
//             transform = "translate(calc(-50% - 52px), -50%) scale(0.94) rotate(-4deg)"
//             opacity = "0.92"
//             zIndex = "10"
//         }

//         card.style.transform = transform
//         card.style.opacity = opacity
//         card.style.zIndex = zIndex

//         card.innerHTML = `
//             <img src="${place.image}" alt="${place.name}" class="h-64 w-full object-cover sm:h-72">
//             <div class="bg-white px-4 py-3">
//                 <h3 class="font-semibold text-gray-900">${place.name}</h3>
//             </div>
//         `

//         cardStack.appendChild(card)
//     })

//     stackLink.href = destinations[activeStackIndex].link
//     stackLink.textContent = `Explore ${destinations[activeStackIndex].name} →`

//     stackDots.innerHTML = ""
//     destinations.forEach((_, index) => {
//         const dot = document.createElement("span")
//         dot.className = `h-1.5 rounded-full transition-all duration-300 ${index === activeStackIndex ? "w-6 bg-red-500" : "w-1.5 bg-gray-300"}`
//         stackDots.appendChild(dot)
//     })
// }

// function moveStack(direction) {
//     activeStackIndex = (activeStackIndex + direction + destinations.length) % destinations.length
//     renderCardStack()
// }

// stackPrev.addEventListener("click", () => moveStack(-1))
// stackNext.addEventListener("click", () => moveStack(1))

// renderCardStack()



// Heritage image slider — fixed-size slides
const heritageSwiper = new Swiper(".heritage-swiper", {
    loop: true,
    // Loop when user clicks the buttons

    speed: 500,
    // Animation speed, 500 ms

    spaceBetween: 16,
    // 16px between each slide
    
    slidesPerView: 1.15,
    // 1.15 of next slide is visible

    breakpoints: {
        640: { slidesPerView: 1.6 },
        1024: { slidesPerView: 2.1 }
    },
    // Makes slide responsive

    navigation: {
        nextEl: ".heritage-next",
        prevEl: ".heritage-prev"
    }
    // Connects to the button element in HTML and allows for a next and previous button
})
