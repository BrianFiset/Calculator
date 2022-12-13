const buttons = document.querySelectorAll(".btn")
const bottomDisplay = document.getElementById("bottom-display")
const topDisplay = document.getElementById("top-display")
const clearbtn = document.getElementById("clear-btn")
const deletebtn = document.getElementById("delete-btn")
const operator = document.querySelectorAll(".operator")
const equals = document.getElementById("equals")


buttons.forEach(function(num) {
    num.addEventListener("click", function(e) {
        bottomDisplay.textContent += e.target.textContent
    })
})

clearbtn.addEventListener("click", function() {
    bottomDisplay.textContent = ""
    topDisplay.textContent = ""
})

deletebtn.addEventListener("click", function(){
    result = bottomDisplay.textContent.split("")
    result.pop()
    bottomDisplay.textContent = result.join("")
})

operator.forEach(function(oper) {
    oper.addEventListener("click", function(e) {
        num1 = topDisplay.textContent.split("")
        num1.pop()
        num2 = bottomDisplay.textContent
        if(num1.includes("=")){
            topDisplay.textContent =  num2 + oper.textContent
            bottomDisplay.textContent = ""
        } else {
        let result = operate(num1.join(""),num2,oper.textContent)
        topDisplay.textContent =  result + oper.textContent
        bottomDisplay.textContent = ""
        }
    })
})

equals.addEventListener("click", function(e) {
    num1 = topDisplay.textContent.split("")
    oper = num1.pop()
    num2 = bottomDisplay.textContent
    let result = operate(num1.join(""),num2,oper)
    topDisplay.textContent =  topDisplay.textContent + bottomDisplay.textContent + "=" + result
    bottomDisplay.textContent = ""
})

function add(num1, num2) {
    return Number(num1) + Number(num2)
}

function subtract(num1, num2) {
    return num1 - num2
}

function multiply(num1, num2) {
    return num1 * num2
}

function divide(num1, num2) {
    return num1 / num2
}

function operate(num1, num2, operator) {
    let result = ""
    if(num1 === "") {
        return num2
    } else if (num2 ===""){
        return num1
    }
    else if (operator === "−") {
        result = subtract(num1, num2)
        return result
    } else if (operator === "×") {
        result = multiply(num1, num2)
        return result
    } else if (operator === "÷") {
        result = divide(num1, num2)
        return result
    } else if (operator === "+") {
        result = add(num1, num2)
        return result
    }
}
