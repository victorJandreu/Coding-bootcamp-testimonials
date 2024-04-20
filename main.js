

let slideArticle = document.querySelectorAll("article")
let counter = 0


const next  = document.querySelectorAll(".next").forEach(x => x.addEventListener("click", sliderNext ))
const prev = document.querySelectorAll(".prev").forEach(x => x.addEventListener("click", sliderPrev))


function sliderNext(){
   slideArticle[counter].style.animation = "next1 0.8s ease-in forwards"
   if(counter >= slideArticle.length-1) {
    counter = 0
   } else {
    counter++
   }
   slideArticle[counter].style.animation = "next2 0.8s ease-in forwards"
}



function sliderPrev(){
    slideArticle[counter].style.animation = "prev1 0.8s ease-in forwards"
    if(counter == 0) {
     counter = slideArticle.length -1
    } else {
     counter--
    }
    slideArticle[counter].style.animation = "prev2 0.8s ease-in forwards"
}