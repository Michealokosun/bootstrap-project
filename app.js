const btn1 = document.querySelector('#btn1'),
    close = document.querySelector('#close'),
    modal = document.querySelector('#modal'),
    submit = document.querySelector('#submit'),
    nav = document.querySelector('#navmenu'),
    open = document.querySelector('#openbtn')



btn1.addEventListener('click', function(e) {
    e.preventDefault()
    modal.style.display = 'block'

})
close.addEventListener('click', closeModal)
submit.addEventListener('click', closeModal)


function closeModal(e) {
    e.preventDefault()
    modal.style.display = 'none'

}


open.addEventListener('click', function() {
    // nav.classList.toggle('open')

})