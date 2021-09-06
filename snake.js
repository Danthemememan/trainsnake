let button= document.querySelector('button')
let road=document.querySelector('canvas').getContext('2d')

let lengthOfRoad = 800 

let startspeed = 3
setInterval(drawcars, 100)

let whereCar = 10

let howmanycar = 10

let carlist = []

let carlocation = 0

colors = ['black', 'pink', 'green', 'orange', 'red', 'blue', 'lightblue', 'brown', 'gray', 'purple']

for (let car = 0; car < howmanycar; car++){

    let allcarstuff = { location: carlocation, speed: startspeed, color: colors[car]}
    carlist.push(allcarstuff)
    carlocation = carlocation + 30
}
console.log(carlist)

drawcars()


function moveCars() {
 
// road.fillStyle="white" 
// road.fillRect(0, 0, 100, 800)
// // road.fillStyle="black"
// // road.fillRect(whereCar, 10, 20, 30)
// // whereCar = whereCar + 1
}

function drawcars(){
    road.fillStyle="white" 
    road.fillRect(0, 0, 800, 100)
    for (let car = 0; car < howmanycar; car++){
        let allcarstuff = carlist[car]
        let whereonecar = allcarstuff.location
        road.fillStyle= allcarstuff.color
        road.fillRect(whereonecar, 20, 10, 15)
        allcarstuff.location = (allcarstuff.location + allcarstuff.speed) % lengthOfRoad
        carlist[car] = allcarstuff
        
    }
}

button.addEventListener('click',function(){
    
    carlist[9].speed = 0

    setTimeout(function(){
        carlist[9].speed = startspeed
        
    },2000)
   
})