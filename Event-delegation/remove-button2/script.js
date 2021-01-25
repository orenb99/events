const div=document.getElementById("main");
div.addEventListener("click",function(event){
target=event.target;
if(target.tagName==="INPUT")
    closeParagraph(target);
})
function closeParagraph(button){
    button.parentElement.remove();
}