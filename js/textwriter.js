const texts = ['Professional Real Estate Agent', 'Experienced Real Estate Agent', 'Honest Real Estate Agent']

let count = 0;
let index = 0;
let currentText = '';
let letter = '';


(setTimeout(function type(){

    if(count === texts.length){
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index)

    document.querySelector('.typing span').textContent = letter;
    if(letter.length === currentText.length){
        setTimeout(function(){
            count++;
            index = 0;
        }, 3000);
        
    }
    
    setTimeout(type, 300);

}, 5000));