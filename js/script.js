var element = document.querySelector(".nav__links");


// Activate Sub-menu function


function toggleItem() {
    if (element.classList.contains("nav__links--active")) {
        element.classList.remove("nav__links--active")
    } else {
        element.classList.add("nav__links--active")
    }
}

element.addEventListener(
    "click",
    toggleItem
)

// End of Activate Sub-menu function :)  