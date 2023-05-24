const canvas = document.querySelector("canvas")
const c = canvas.getContext('2d')
canvas.width = 1500
canvas.height = 700



const img = new Image()
img.src = './d1.png'

const img2 = new Image()
img2.src = './180.png'

const p = new Image()
p.src = './80.png'

let x = 30
let cool = 0

let w = 320
let k = 0
let g = 0
let h = 2



function animate(){
    requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    c.drawImage(img2,0-g,0)
    c.drawImage(img2,img2.width-g,0)
    
    c.drawImage(img,0-k,0)
    c.drawImage(img,img.width-k,0)
    c.drawImage(img,img.width*2-k,0)
    
    
     
    k+=1
    g+=0.5
    
    c.drawImage(
        p,
        w-320,
        0,
        p.width/4,
        p.height,
        600,
        240,
        p.width/4,
        p.height )
    
    
    
    cool+=1
        if(cool%x == 0 ){
            w += 320
        }
        if(w>=320*4){
            w=320
        }
   
}

animate()


