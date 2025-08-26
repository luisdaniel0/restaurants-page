import "./styles.css"
import loadHome from "./home"
import loadMenu from "./menu";

loadHome();
const menuButton = document.querySelector('#menuBtn')
menuButton.addEventListener("click",()=>{
    loadMenu();
})

const homeButton = document.querySelector('#homeBtn')

homeButton.addEventListener("click",()=>{
    loadHome();
})

