const lists=document.getElementsByTagName("LI");
for(let list of lists){
    if(list.hasChildNodes())
        alert(list.innerText);
}