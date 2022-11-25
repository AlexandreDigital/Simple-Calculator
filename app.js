let firstInp = document.querySelector('.first-number');
let secondInp = document.querySelector('.second-number');
let calcBtn = document.querySelector('.calc');
let outputDiv = document.querySelector('.outputDiv');
let result
let moves = {
    plus: document.querySelector('.plus'),
    minus: document.querySelector('.minus'),
    multi: document.querySelector('.multi'),
    divide: document.querySelector('.divide')
}

calcBtn.addEventListener('click', function(){
    if(moves.plus.style.display == "flex"){
        
        result = parseFloat(firstInp.value) + parseFloat(secondInp.value);

    }
    else if(moves.plus.style.display == "none" && moves.minus.style.display == "flex"){

        result = parseFloat(firstInp.value) - parseFloat(secondInp.value)

    }
    else if(moves.minus.style.display == "none" && moves.multi.style.display == "flex"){

        result = parseFloat(firstInp.value) * parseFloat(secondInp.value)

    }
    else if(moves.multi.style.display == "none" && moves.divide.style.display == "flex"){

        result = parseFloat(firstInp.value) / parseFloat(secondInp.value)

    }
    outputDiv.textContent = `${result}`
        if(firstInp.value == '' && secondInp.value == ''){
            outputDiv.textContent = '0'
        }else if(firstInp.value == '' || secondInp.value == ''){
            outputDiv.textContent = "Fill All Number"
        }
    
})

moves.plus.addEventListener('click', function(){
    moves.plus.style.display = "none";
    moves.minus.style.display = "flex"
})

moves.minus.addEventListener('click', function(){
    moves.minus.style.display = "none";
    moves.multi.style.display = "flex";
})

moves.multi.addEventListener('click', function(){
    moves.multi.style.display = "none";
    moves.divide.style.display = "flex";
})

moves.divide.addEventListener('click', function(){
    moves.divide.style.display = "none";
    moves.plus.style.display = "flex";
})
