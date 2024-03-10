const buttons = document.querySelectorAll('.buttons')
const body = document.querySelector('body')

buttons.forEach( (button) => {
    const style = window.getComputedStyle(button)
    button.addEventListener('click', (e) => {
        console.log(style.backgroundColor)
        body.style.backgroundColor = style.backgroundColor 
    } )
})



