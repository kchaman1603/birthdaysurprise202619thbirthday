function enterSite(){
document.querySelector(".intro").style.display="none"
document.getElementById("main").style.display="block"
}

setInterval(()=>{
let heart=document.createElement("div")
heart.innerHTML="❤️"
heart.className="heart"
heart.style.left=Math.random()*100+"%"
document.body.appendChild(heart)

setTimeout(()=>heart.remove(),6000)

},400)

function answer(correct){

if(correct){
document.getElementById("result").innerHTML="Correct ❤️"
}
else{
document.getElementById("result").innerHTML="Try again 😅"
}

}

let hold=document.getElementById("hold")
let timer

hold.onmousedown=()=>{

timer=setTimeout(()=>{
document.getElementById("secret").style.display="block"
},2000)

}

hold.onmouseup=()=>{

clearTimeout(timer)

}

let birthday=new Date("March 16, 2026").getTime()

setInterval(()=>{

let now=new Date().getTime()

let diff=birthday-now

let days=Math.floor(diff/(1000*60*60*24))

document.getElementById("countdown").innerHTML=

days+" days left ❤️"

},1000)

function fireworks(){

alert("🎆 Happy Birthday Madam Ji 🎂")

}
