const divList=document.getElementsByTagName("div");
const buttonList=document.getElementsByTagName("input");
for(let button of buttonList){
    button.addEventListener("click",function remove(){
        button.parentElement.parentElement.removeChild(button.parentElement);
    });
}   