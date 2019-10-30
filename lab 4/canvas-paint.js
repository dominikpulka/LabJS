document.addEventListener('DOMContentLoaded', appStart)

let canvas
let ctx

function appStart() {
    canvas = document.querySelector('#canvas')
    document
        .querySelector('#darken')
        .addEventListener('click', () => darkenFilter())
    ctx = canvas.getContext('2d')
    //ctx.rect(50,50,300,200)
    //ctx.fill()
    //ctx.arc(500,500,50,0,2*Math.PI)
    //ctx.stroke()
    drawImage()
}
function drawImage() {
    const image = new Image()
    image.src = "photo.jpg"
    image.addEventListener('load' ,() => {
        ctx.drawImage(image, 0 ,0)  
    })
}
function darkenFilter(amount = 30){
    const canvasData = ctx.getImageData(0, 0, 300, 200)    
    for( let i = 0 ; i < canvasData.data.length; i++){
        canvasData.data[i] -=amount
    }
    ctx.putImageData(canvasData, 0, 0)    
}