document.addEventListener("mouseover",function(event){
    target=event.target;
    if(target.tagName==="BUTTON")
        showToolTip(target);
})
function showToolTip(button){
    let title=document.createElement("div");
    let tooltip=button.dataset.tooltip;
    button.parentNode.append(title);
    title.innerHTML=tooltip;
    title.classList.add("tooltip");
    let frame = button.getBoundingClientRect();
    let x=frame.x+(frame.width/2-title.offsetWidth/2);
    let y=frame.top-title.offsetHeight;
    if(x<0)
        x=0;
    if(y<0)
        y+=title.offsetHeight+frame.height/2 +10;
    title.style.top=y+"px";
    title.style.left=x+"px";

}
document.addEventListener("mouseout",function(event){
    target=event.target;
    if(target.tagName==="BUTTON"){
        const title=document.querySelector(".tooltip");
        title.remove();
    }
        
})