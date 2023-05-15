

const outputElement = document.querySelector('.output')
const inputElement = document.querySelector('#input')


inputElement.onchange = function(){
    if (inputElement.value) {
        numberOneTriangle(Number(inputElement.value))
    }  
}

const numberOneTriangle = (number) => {
 if (Number.isInteger(number) && number > 0 && number < 10 ){
    for (let i = 1; i <= number; i++){
        outputElement.innerText += `${'#'.repeat(i)}
         `
    }
 }
}