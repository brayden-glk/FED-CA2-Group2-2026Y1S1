(() => {

// Mobile Navigations
const menuButton = document.getElementById("menu-button")
const mobileMenu = document.getElementById("mobile-menu")
const mobileDropdownButtons = document.querySelectorAll(".mobile-dropdown-buttons")
const mobileDropdownMenus = document.querySelectorAll(".mobile-dropdown-menus")
const mobileNavigationChevron = document.querySelectorAll(".mobile-navigation-chevron")

menuButton.addEventListener("click", ()  => {
    mobileMenu.classList.toggle("max-h-0")   
    mobileMenu.classList.toggle("max-h-screen")   
    const isOpen = !mobileMenu.classList.contains("max-h-0")
    menuButton.setAttribute("aria-expanded", isOpen)
})

mobileDropdownButtons.forEach(button => {
    button.addEventListener("click", () => {
        const currentMenu = button.nextElementSibling
        const currentChevron = button.querySelector(".mobile-navigation-chevron");
        const isOpen = currentMenu.style.maxHeight !== "0px" && currentMenu.style.maxHeight !== ""
        
        mobileDropdownMenus.forEach(menu => {
            menu.style.maxHeight = "0px"
        })

        mobileNavigationChevron.forEach(chevron => {
            chevron.classList.remove("rotate-180")
        })
        

        if (!isOpen) {
            currentMenu.style.maxHeight = `${currentMenu.scrollHeight}px`
            currentChevron.classList.add("rotate-180")
        }
    })
})


//Desktop Navigations
const exploreItem = document.getElementById("explore-item")
const exploreTrigger = document.getElementById("explore-trigger")
const desktopDropdown = document.getElementById("desktop-dropdown")

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

    // Script for setting correct href to the correct webpage for the Navigation Bar
    const routes = {
        "Landmarks": "pages/attractions/attraction1.html",
        "Iconic Landmarks": "pages/attractions/attraction1.html",
        "Nature & Wildlife": "pages/attractions/attraction2.html",
        "Photo spots": "pages/attractions/photo-spots.html",
        "Heritage Districts": "pages/culture-heritage/webpage6.html",
        "Religious Heritage Sites": "pages/culture-heritage/webpage7.html",
        "Museums & Cultural Streets": "pages/culture-heritage/webpage8.html",
        "Museums and Cultural Streets": "pages/culture-heritage/webpage8.html",
        "Singapore's food culture": "pages/food-shopping/fs1.html",
        "Shopping experience": "pages/food-shopping/fs2.html",
        "Food & Shopping tips": "pages/food-shopping/fs3.html",
        "Practical tips": "pages/practical-tips.html",
        "Contact us": "pages/contact-us.html"
    }
    const navigationScript = document.currentScript
    if (navigationScript?.src) {
        const projectRoot = new URL("../../", navigationScript.src)
        document.querySelectorAll("nav a").forEach(link => {
            const route = routes[link.textContent.replace(/\s+/g, " ").trim()]
            if (route) link.href = new URL(route, projectRoot).href
        })
    }
})()
