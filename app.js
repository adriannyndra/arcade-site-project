const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navlinks = document.getElementsByClassName('navlinks')[0]


toggleButton.addEventListener('click', () => {
    navlinks.classList.toggle('active')
    console.log('Input Detected')
})


