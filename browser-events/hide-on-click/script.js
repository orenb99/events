const button=document.querySelector("#button");
const div=document.querySelector("#text");
button.addEventListener("click",vanish);

function vanish(){
div.style.display="none";
}