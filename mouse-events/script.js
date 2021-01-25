const list=document.getElementsByTagName("LI");
for(let node of list){
    node.addEventListener("click",function(event){
        target=event.target;
        if(event.ctrlKey)
            target.classList.remove("highlight");
        else{
        for(let node of list){
        node.classList.remove("highlight");
        }
        target.classList.add("highlight");
    }
    });
}