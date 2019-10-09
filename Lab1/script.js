document.addEventListener('DOMContentLoaded', appStart)
let btn, box
function appStart(){
    btn = document.querySelector('#actionbtn')
    box = document.querySelector('#box')
    btn.addEventListener('click', btnClick)
}

let counterHandler
function btnClick(e){
    //box.styles.background = 'lightgreen'          
    box.classList.toggle('green')    
    // for(let i=0;i<10;i++){    
    //     box.innerHTML += i + '<br>'        
    //}     
    counterHandler = setInterval(
        wypiszLiczbe,
        1000)   
}

let licznik = 1
function wypiszLiczbe(){    
    box.innerHTML += licznik + '<br>'
    licznik++
    if(licznik===11){
        clearInterval(counterHandler)
    }
}
