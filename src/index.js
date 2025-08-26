import "./styles.css"
import loadHome from "./home"
import loadMenu from "./menu";
import loadAbout from "./about"

loadHome();

//menu button
const menuButton = document.querySelector('#menuBtn')
menuButton.addEventListener("click",()=>{
    loadMenu();
})


//home button
const homeButton = document.querySelector('#homeBtn')
homeButton.addEventListener("click",()=>{
    loadHome();
})

//about buton
const aboutButton = document.querySelector('#aboutBtn')
aboutButton.addEventListener("click",()=>{
    loadAbout();
})
