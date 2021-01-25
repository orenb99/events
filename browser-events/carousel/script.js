const img1=document.getElementById("img1");
const img2=document.getElementById("img2");
const img3=document.getElementById("img3");
const next=document.getElementById("next");
const back=document.getElementById("back");
const arr=[];
for(let i=1;i<11;i++){
arr.push("./imgs/"+i+".png");
}
let count=0;
next.addEventListener("click",changeNext);
back.addEventListener("click",changePrevious);

function changeNext(){
    if(count!==7){
        if(count===6)
            count++;
        else
            count+=3;
    img1.src=arr[count];
    img2.src=arr[count+1];
    img3.src=arr[count+2];
    }
}
function changePrevious(){
    if(count!==0){
        if(count===1)
            count--;
        else
            count-=3;
    img1.src=arr[count];
    img2.src=arr[count+1];
    img3.src=arr[count+2];
    }
}

