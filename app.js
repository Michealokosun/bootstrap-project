const btn1 = document.querySelector('#btn1'),
    close = document.querySelector('#close'),
    modal = document.querySelector('#modal'),
    submit = document.querySelector('#submit'),
    btn3 = document.querySelector('#btn3'),
    year = document.querySelector('#year'),
    mol = document.querySelector('#mol'),
    btnclose = document.querySelector('#btnclose')



btn1.addEventListener('click', function(e) {
    e.preventDefault()
    modal.style.display = 'block'

})
close.addEventListener('click', closeModal)
submit.addEventListener('click', (e) => {
    e.preventDefault()
})


function closeModal(e) {
    e.preventDefault()
    modal.style.display = 'none'

}





btn3.addEventListener('click', function(e) {
    e.preventDefault()


})


const date3 = new Date()
const years = date3.getFullYear()
year.innerHTML = years


window.onload = function() {
    mol.style.display = 'block'

}


btnclose.addEventListener('click', () => {
    mol.style.display = 'none'
})