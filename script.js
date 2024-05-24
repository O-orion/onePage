const  hamburgerButton = document.querySelector("#humburgerMobile")
const  closeButton = document.querySelector("#closeButton")
const  mobileMenu = document.querySelector("#mobileMenu")

hamburgerButton.addEventListener("click", function() {
    hamburgerButton.classList.remove('hamburger')
    hamburgerButton.classList.add('none')
    mobileMenu.classList.add('flex')
})

closeButton.addEventListener('click', function() {
    hamburgerButton.classList.add('hamburger')
    hamburgerButton.classList.remove('none')
    mobileMenu.classList.remove('flex')
})

