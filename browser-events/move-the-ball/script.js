const field = document.querySelector("#field");
const ball = document.querySelector("#ball");

field.addEventListener("click",function moveBall(event){
    let x=event.clientX;
    let y=event.clientY;
    let xf=x-(ball.width)/1.6;
    let yf=y-(ball.height)/1.6;
    if(xf<field.clientWidth-ball.width&&yf<field.clientHeight-ball.height){
        ball.style.left=xf+"px";
        ball.style.top=yf+"px";
    }
});
