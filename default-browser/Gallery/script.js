const main=document.getElementById("main");
//const imgs=document.querySelectorAll("#gallery>img");
const div=document.getElementById("gallery");

div.addEventListener("click",function(event){
    target=event.target;
    if(target.tagName ==="IMG")
        changePicture(target);
})

function changePicture(img){
    main.src=img.src;
}
