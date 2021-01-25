const bar=document.querySelector("#bar");
const slider=document.querySelector("#slider");

slider.addEventListener("mousedown",press)

function press(event){
    slider.style.left=event.clientX-slider.clientWidth+"px";
    slider.addEventListener("mousemove",move);

function move(event){
    slider.style.left=event.clientX-slider.clientWidth+"px";
    

    slider.addEventListener("mouseup",function(){
        slider.removeEventListener("mousemove",move);
        slider.removeEventListener("mousedown",press);
    
    })
}

}