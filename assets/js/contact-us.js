const menuButton = document.getElementById("menu-button")
const mobileMenu = document.getElementById("mobile-menu")
const mobileDropdownButtons = document.querySelectorAll(".mobile-dropdown-buttons")
const mobileDropdownMenus = document.querySelectorAll(".mobile-dropdown-menus")
const exploreItem = document.getElementById("explore-item")
const exploreTrigger = document.getElementById("explore-trigger")
const desktopDropdown = document.getElementById("desktop-dropdown")


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
const pageLinks = { "Landmarks": "attractions/attraction1.html", "Iconic Landmarks": "attractions/attraction1.html", "Nature & Wildlife": "attractions/attraction2.html", "Photo spots": "attractions/photo-spots.html", "Heritage Districts": "culture-heritage/webpage6.html", "Religious Heritage Sites": "culture-heritage/webpage7.html", "Museums & Cultural Streets": "culture-heritage/webpage8.html", "Museums and Cultural Streets": "culture-heritage/webpage8.html", "Singapore's food culture": "food-shopping/fs1.html", "Shopping experience": "food-shopping/fs2.html", "Food & Shopping tips": "food-shopping/fs3.html", "Practical tips": "practical-tips.html", "Contact us": "contact-us.html" }
document.querySelectorAll("nav a").forEach(link => { const path = pageLinks[link.textContent.replace(/\s+/g, " ").trim()]; if (path) link.href = path })
