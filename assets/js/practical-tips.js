const menuButton = document.getElementById("menu-button")
const mobileMenu = document.getElementById("mobile-menu")
const mobileDropdownButtons = document.querySelectorAll(".mobile-dropdown-buttons")
const mobileDropdownMenus = document.querySelectorAll(".mobile-dropdown-menus")
const exploreItem = document.getElementById("explore-item")
const exploreTrigger = document.getElementById("explore-trigger")
const desktopDropdown = document.getElementById("desktop-dropdown")
const mobileQuickAccessButton = document.getElementById("mobile-quick-access-button")
const mobileQuickAccessMenu = document.getElementById("mobile-quick-access-menu")
const chevronImage = mobileQuickAccessButton.querySelector(".chevron-image")
const mobileQuickAccessText = document.getElementById("mobile-quick-access-text")
const mobileQuickAccessItems = mobileQuickAccessMenu.querySelectorAll("button")
const desktopQuickAccess = document.getElementById("desktop-quick-access")
const desktopQuickAccessItems = desktopQuickAccess.querySelectorAll("li")
const checkBoxes = document.querySelectorAll(".trip-checkbox")
const progressText = document.getElementById("checklist-progress")


// Mobile Navigations
menuButton.addEventListener("click", ()  => {
    mobileMenu.classList.toggle("max-h-0")   
    mobileMenu.classList.toggle("max-h-screen")   
    const isOpen = !mobileMenu.classList.contains("max-h-0")
    menuButton.setAttribute("aria-expanded", isOpen)
})

mobileDropdownButtons.forEach(button => {
    button.addEventListener("click", () => {
        const currentMenu = button.nextElementSibling
        const isOpen = currentMenu.style.maxHeight !== "0px" && currentMenu.style.maxHeight !== ""
        
        mobileDropdownMenus.forEach(menu => {
            menu.style.maxHeight = "0px"
        })

        if (!isOpen) {
            currentMenu.style.maxHeight = `${currentMenu.scrollHeight}px`
        }
    })
})


//Desktop Navigations
function openDropdown(){
    exploreTrigger.setAttribute("aria-expanded", "true")
    exploreTrigger.classList.replace("border-transparent", "border-red-500")
    desktopDropdown.classList.remove("max-h-0")
    desktopDropdown.classList.add("max-h-40")
}

function closeDropdown(){
    exploreTrigger.setAttribute("aria-expanded", "false")
    exploreTrigger.classList.replace("border-red-500", "border-transparent")
    desktopDropdown.classList.remove("max-h-40")
    desktopDropdown.classList.add("max-h-0")
}

exploreItem.addEventListener("mouseenter", openDropdown)
exploreItem.addEventListener("mouseleave", closeDropdown)
desktopDropdown.addEventListener("mouseenter", openDropdown)
desktopDropdown.addEventListener("mouseleave", closeDropdown)

//Mobile quick access
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
desktopQuickAccessItems.forEach(item => {
    item.addEventListener("click", () => {
        document
        .getElementById(item.dataset.target)
        .scrollIntoView({behavior: "smooth"})
    })
})

//Checklist
function updateProgress() {
    const completed = document.querySelectorAll(".trip-checkbox:checked").length
    const total = checkBoxes.length

    progressText.textContent = `${completed}/${total} Completed`
}

checkBoxes.forEach(checkbox => {
    checkbox.addEventListener("change", updateProgress)
})
const pageLinks = { "Landmarks": "attractions/attraction1.html", "Iconic Landmarks": "attractions/attraction1.html", "Nature & Wildlife": "attractions/attraction2.html", "Photo spots": "attractions/photo-spots.html", "Heritage Districts": "culture-heritage/webpage6.html", "Religious Heritage Sites": "culture-heritage/webpage7.html", "Museums & Cultural Streets": "culture-heritage/webpage8.html", "Museums and Cultural Streets": "culture-heritage/webpage8.html", "Singapore's food culture": "food-shopping/fs1.html", "Shopping experience": "food-shopping/fs2.html", "Food & Shopping tips": "food-shopping/fs3.html", "Practical tips": "practical-tips.html", "Contact us": "contact-us.html" }
document.querySelectorAll("nav a").forEach(link => { const path = pageLinks[link.textContent.replace(/\s+/g, " ").trim()]; if (path) link.href = path })
