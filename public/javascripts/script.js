let btn = document.querySelector('#btn')
let div = document.querySelector('#reviews')


btn.addEventListener('click', () => {
    if(div.style.display === 'none'){
        div.style.display = 'block'
    } else {
        div.style.display = 'none'
    }
})