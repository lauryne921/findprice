let input = document.querySelector('.price'); 
let btn = document.querySelector('.btn'); 
let maths = document.querySelector('.maths'); 

let price = Math.floor(Math.random() * 100000);  


btn.addEventListener('click', (e) => {
    e.preventDefault(); 
    if (price > input.value) {
        let divCold = document.createElement('div'); 
        maths.prepend(divCold); 
        divCold.classList.add('divCold'); 
        divCold.textContent = input.value + " C'est plus"; 
        input.value = ''; 
    }

    else if (price < input.value) {
        let divHot = document.createElement('div'); 
        maths.prepend(divHot); 
        divHot.classList.add('divHot'); 
        divHot.textContent = input.value + " C'est moins"; 
        input.value = ''; 
    }

    else if (price == input.value) {
        let divWin = document.createElement('div'); 
        maths.prepend(divWin); 
        divWin.classList.add('divWin'); 
        divWin.textContent = input.value + " BINGO"; 
        input.value = ''; 
    }
    
    else {
        return; 
    }
}); 
