console.log("js loaded")

let btn = document.getElementById('btn')
let div = document.getElementById('all-reviews')
console.log()

btn.addEventListener('click', () => {
    if(div.style.display === 'none'){
        div.style.display = 'block'
    } else {
        div.style.display = 'none'
    }
})