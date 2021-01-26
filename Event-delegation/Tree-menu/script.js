const lists=document.getElementsByTagName("li");
for(let list of lists){
    const span=document.createElement("span");
    list.prepend(span);
    span.prepend(span.nextSibling);
}
const tree=document.getElementById("tree");
tree.addEventListener("click",function (event){
target=event.target;
if(target.tagName==="SPAN")
    collapse(target);
});

function collapse(span){
    if(span.parentNode.querySelector("ul"))
        span.parentNode.querySelector("ul").hidden=!span.parentNode.querySelector("ul").hidden;
}