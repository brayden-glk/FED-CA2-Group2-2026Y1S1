//Mobile quick access

const mobileQuickAccessButton = document.getElementById("mobile-quick-access-button")
const mobileQuickAccessMenu = document.getElementById("mobile-quick-access-menu")
const chevronImage = mobileQuickAccessButton.querySelector(".chevron-image")
const mobileQuickAccessText = document.getElementById("mobile-quick-access-text")
const mobileQuickAccessItems = mobileQuickAccessMenu.querySelectorAll("button")

mobileQuickAccessButton.addEventListener("click", () => {
    const isOpen = mobileQuickAccessMenu.classList.contains("max-h-40")
    if (isOpen){
        mobileQuickAccessMenu.classList.add("max-h-0")
        mobileQuickAccessMenu.classList.remove("max-h-40")
        chevronImage.classList.toggle("rotate-180")
        setTimeout( () => {
            mobileQuickAccessButton.classList.remove("rounded-b-none")
            mobileQuickAccessButton.classList.add("rounded-b-md")
        }, 300)
    }
    else if (!isOpen){
        mobileQuickAccessButton.classList.add("rounded-b-none")
        mobileQuickAccessButton.classList.remove("rounded-b-md")
        mobileQuickAccessMenu.classList.add("max-h-40")
        mobileQuickAccessMenu.classList.remove("max-h-0")
        chevronImage.classList.toggle("rotate-180")
    }
})

mobileQuickAccessItems.forEach(item => {
    item.addEventListener("click", () => {
        mobileQuickAccessText.textContent = item.textContent

        document
        .getElementById(item.dataset.target)
        .scrollIntoView ({behavior: "smooth"})

        mobileQuickAccessMenu.classList.remove("max-h-40")
        mobileQuickAccessMenu.classList.add("max-h-0")
        chevronImage.classList.remove("rotate-180")
        mobileQuickAccessButton.classList.remove("rounded-b-none")
        mobileQuickAccessButton.classList.add("rounded-b-md")
    })


})

//Desktop quick access
const desktopQuickAccess = document.getElementById("desktop-quick-access")
const desktopQuickAccessItems = desktopQuickAccess.querySelectorAll("li")

desktopQuickAccessItems.forEach(item => {
    item.addEventListener("click", () => {
        document
        .getElementById(item.dataset.target)
        .scrollIntoView({behavior: "smooth"})
    })
})

//Checklist
const checkBoxes = document.querySelectorAll(".trip-checkbox")
const progressText = document.getElementById("checklist-progress")

function updateProgress() {
    const completed = document.querySelectorAll(".trip-checkbox:checked").length
    const total = checkBoxes.length

    progressText.textContent = `${completed}/${total} Completed`
}

checkBoxes.forEach(checkbox => {
    checkbox.addEventListener("change", updateProgress)
})