const aList=document.getElementsByTagName("a");
for(let a of aList){
    a.addEventListener("click", function(event){
        let bol=false;
        bol=confirm("Are you sure u want to leave?");
        if(bol===false)
            event.preventDefault();
    })
}