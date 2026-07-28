document.querySelectorAll(".carousel").forEach(carousel => {
    const images = carousel.querySelectorAll(".carousel-image")
    const previousButton = carousel.querySelector(".previous")
    const nextButton = carousel.querySelector(".next")
    let currentImage = 0

    function showImage(index) {
        images[currentImage].classList.add("hidden")
        currentImage = (index + images.length) % images.length
        images[currentImage].classList.remove("hidden")
    }

    previousButton.addEventListener("click", () => showImage(currentImage - 1))
    nextButton.addEventListener("click", () => showImage(currentImage + 1))
})
