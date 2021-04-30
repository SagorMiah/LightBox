const images = document.querySelectorAll('.image')
const pimg = document.querySelector('.popup img')
const popup = document.querySelector('.popup')
const cross = document.querySelector('.popup a')
const darkoverly = document.querySelector('.darkoverly')
const next = document.querySelector('#next')
const prev = document.querySelector('#prev')

let current = 0

images.forEach((image,e) => {
    image.addEventListener('click', () => {
        let src = image.src
        pimg.src = src
        popup.classList.add('active')
        darkoverly.classList.add('active')
    })
})

cross.addEventListener('click', () => {
    popup.classList.remove('active')
    darkoverly.classList.remove('active')
})

next.addEventListener('click', () => {
    pimg.src = images[current].src
    current = (current += 1) % images.length
})

prev.addEventListener('click', () => {
    pimg.src = images[current].src
    current = (current += 1) % images.length
})
