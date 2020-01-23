let count = 0;

document.getElementById('myBtn').addEventListener('click', 
function (){
    count++
    document.getElementById('head').innerHTML=`
        ${count}
    `
})

document.getElementById('subBtn').addEventListener('click', 
function (){
    count--
    document.getElementById('head').innerHTML=`
        ${count}
    `
})

document.getElementById('reset').addEventListener('click', 
function (){
    count = 0
    document.getElementById('head').innerHTML=`
        ${count}
    `
})

document.getElementById('head').innerHTML = count
