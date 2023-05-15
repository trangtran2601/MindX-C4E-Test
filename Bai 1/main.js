
const outputElement = document.querySelector('.output')
const button = document.querySelector('.btn')

const checkPrimeNumber = function(number) {
    for (let i = 2; i < number; i++) {
        if (number % i === 0){
            return false
        } 
    }
    return true
}

const sum = function(number1,number2){
    let result = 0
    for (let currentvalue = number1; currentvalue <= number2; currentvalue ++){
      if (checkPrimeNumber(currentvalue)) {
        result += currentvalue
      }
    }
    return result
}



button.onclick = function(){
    outputElement.innerText=""
    const firstNumber = Number(document.querySelector('.first-number').value)
    const secondNumber = Number(document.querySelector('.second-number').value)
    if (firstNumber && secondNumber){
        if (secondNumber > firstNumber){           
            outputElement.innerText = `Tổng các số nguyên tố trong khoảng từ ${firstNumber} đến ${secondNumber} là ${sum(firstNumber, secondNumber)}`
        } else  {
            alert('Vui lòng nhập số thứ 2 lớn hơn số thứ nhất')
            outputElement.innerText = ''
        }
    } else {
        alert('Vui lòng nhập đủ 2 số')
        outputElement.innerText = ''
    }
}