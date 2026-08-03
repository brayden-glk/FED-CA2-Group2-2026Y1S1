//Image carousel

const slides = [
    {
        image: "../../assets/images/practical-tips-banner.jpg",
        title: "Fort Canning Tree Tunnel",
        target: "spot1"
    },
    {
        image: "../../assets/images/heritage.jpeg",
        title: "Spot 2",
        target: "spot2"
    },
    {
        image: "../../assets/images/banner.jpeg",
        title: "Spot 3",
        target: "spot3"
    },
    {
        image: "../../assets/images/heritage.webp",
        title: "Spot 4",
        target: "spot4"
    }
]

let currentSlide = 0

const carouselContainer = document.getElementById("carousel-container")
const carouselImage = document.getElementById("carousel-image")
const carouselTitle = document.querySelectorAll(".carousel-title")
const nextButton = document.getElementById("next-button")
const prevButton = document.getElementById("prev-button")

function updateIndicator(){
    const indicators = document.querySelectorAll(".indicator")

    indicators.forEach((indicator, index) =>{
        if (index == currentSlide){
            indicator.classList.remove("bg-gray-300")
            indicator.classList.add("bg-red-500")
        }
        else {
            indicator.classList.remove("bg-red-500")
            indicator.classList.add("bg-gray-300")            
        }
    })
}

function updateCarousel(){
    carouselImage.classList.add("opacity-0")

    setTimeout(() => {
        carouselImage.src = slides[currentSlide].image
        carouselTitle.forEach(title => {
            title.textContent = slides[currentSlide].title
        })
        updateIndicator()
        carouselImage.classList.remove("opacity-0")
    }, 75)
}

function prevSlide(){
    currentSlide--

    if (currentSlide < 0)
        currentSlide = slides.length - 1

    updateCarousel()
}

function nextSlide(){
    currentSlide++

    if (currentSlide >= slides.length)
        currentSlide = 0

    updateCarousel()
}

let autoSlide = setInterval(nextSlide, 3000)
let isHovered = false

function startAutoslide(){
    clearInterval(autoSlide)
    if(!isHovered)
        autoSlide = setInterval(nextSlide, 3000)
}

nextButton.addEventListener("click", (event) => {
    event.stopPropagation()
    nextSlide()
    startAutoslide()
})

prevButton.addEventListener("click", (event) => {
    event.stopPropagation()
    prevSlide()
    startAutoslide()
})

carouselContainer.addEventListener("mouseenter", () => {
    isHovered = true
    clearInterval(autoSlide)
})

carouselContainer.addEventListener("mouseleave", () => {
    isHovered = false
    startAutoslide()
})

carouselContainer.addEventListener("click", () => {
    document
        .getElementById(slides[currentSlide].target)
        .scrollIntoView({behavior: "smooth"})
})