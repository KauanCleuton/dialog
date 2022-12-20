const button = document.querySelector('#buttonEnviar')
const dialog = document.querySelector('.dialog')
const buttonClose = document.querySelector('#buttonLog')

button.addEventListener('click', (event) => {
    dialog.classList.add('openVisible')
    event.preventDefault()
})

buttonClose.addEventListener('click', (event) => {
    dialog.classList.remove('openVisible')
    event.preventDefault()
})