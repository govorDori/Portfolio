import { about } from "./about.js";

const routes={
    "":"home.html",
    "about":"about.html",
    "projects":"projects.html",
    "contact":"contact.html"
}
window.addEventListener('hashchange',()=>{
    //console.log(window.location.hash);
    navigate()
})
//const loadPage=async ()=>{}

navigate()

function navigate(){
    let hash=window.location.hash.substring(2)
    console.log(hash);
    let page=routes[hash]
    loadPage(page,document.querySelector('.container'))
}
async function loadPage(url,domObj){
    const response=await fetch(url)
    const html=await response.text()
    domObj.innerHTML=html
    if(url=='about.html') about()
}