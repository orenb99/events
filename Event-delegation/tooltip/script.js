document.addEventListener("click",function(event){
    target=event.target;
    if(target.tagName==="BUTTON")
        showToolTip(target);
})
function showToolTip(button){
    alert(button.tooltip.innerText);
}