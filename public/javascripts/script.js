console.log("js loaded")
console.log(document)
let btn = document.querySelector('#btn')
let div = document.querySelector('#reviews')
console.log(btn)
console.log(div)

btn.addEventListener('click', () => {
    if(div.style.display === 'none'){
        div.style.display = 'block'
    } else {
        div.style.display = 'none'
    }
})