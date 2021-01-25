const h1=document.querySelector("#h1");
const list=document.querySelector("#list")
let clicked=false;
h1.addEventListener("click",expand);
h1.addEventListener("hover",pointer());
function expand(){
    if(clicked===false){
    list.style.visibility="visible";
    h1.innerText=" ▼ Click me to collapse!";
    clicked=true;
    }
    else{
        list.style.visibility="hidden";
        h1.innerText="▶Click me to expand!"
        clicked=false;
    }
}
function pointer(){
    h1.style.cursor="pointer";
}