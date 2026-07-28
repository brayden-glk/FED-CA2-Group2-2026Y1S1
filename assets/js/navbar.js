(() => {
    const menuButton = document.getElementById("menu-button")
    const mobileMenu = document.getElementById("mobile-menu")
    const mobileDropdownButtons = document.querySelectorAll(".mobile-dropdown-buttons")
    const mobileDropdownMenus = document.querySelectorAll(".mobile-dropdown-menus")
    const exploreItem = document.getElementById("explore-item")
    const exploreTrigger = document.getElementById("explore-trigger")
    const desktopDropdown = document.getElementById("desktop-dropdown")

    if (menuButton && mobileMenu) {
        menuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("max-h-0")
            mobileMenu.classList.toggle("max-h-screen")
            menuButton.setAttribute("aria-expanded", String(!mobileMenu.classList.contains("max-h-0")))
        })
    }

    mobileDropdownButtons.forEach(button => {
        button.addEventListener("click", () => {
            const currentMenu = button.nextElementSibling
            if (!currentMenu) return
            const isOpen = currentMenu.style.maxHeight !== "0px" && currentMenu.style.maxHeight !== ""
            mobileDropdownMenus.forEach(menu => { menu.style.maxHeight = "0px" })
            if (!isOpen) currentMenu.style.maxHeight = `${currentMenu.scrollHeight}px`
        })
    })

    if (exploreItem && exploreTrigger && desktopDropdown) {
        const openDropdown = () => {
            exploreTrigger.setAttribute("aria-expanded", "true")
            exploreTrigger.classList.replace("border-transparent", "border-red-500")
            desktopDropdown.classList.replace("max-h-0", "max-h-40")
        }
        const closeDropdown = () => {
            exploreTrigger.setAttribute("aria-expanded", "false")
            exploreTrigger.classList.replace("border-red-500", "border-transparent")
            desktopDropdown.classList.replace("max-h-40", "max-h-0")
        }
        exploreItem.addEventListener("mouseenter", openDropdown)
        exploreItem.addEventListener("mouseleave", closeDropdown)
        desktopDropdown.addEventListener("mouseenter", openDropdown)
        desktopDropdown.addEventListener("mouseleave", closeDropdown)
    }

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
