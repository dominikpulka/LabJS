document.addEventListener('DOMContentLoaded', appStart)
let canvas
let myOs
function appStart() {
    myPs = new Photoshop('canvas')
    
    document
        .querySelector('#squareBtn')
        .addEventListener('touchstart', () =>{
            myPs.setBrush('square')
        })
    document
        .querySelector('#circleBtn')
        .addEventListener('touchstart', () =>{            
            myPs.setBrush('circle')
        })        
}