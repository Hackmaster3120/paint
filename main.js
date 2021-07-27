var canvasVar= document.getElementById("myCanvas");
var ctx= canvasVar.getContext("2d");
var color= document.getElementById("lineColor").value;
var width= document.getElementById("lineWidth").value;
var mouseEvt="empty";
var screenWidth=screen.width-70;
var screenHeight=screen.height-300;
var prevX,prevY;
var curX,curY;
canvasVar.addEventListener("mousedown",myMouseD);
function myMouseD(e){
    mouseEvt="MouseD"
}
canvasVar.addEventListener("mouseup",myMouseU);
function myMouseU(e){
    mouseEvt="MouseU"
}
canvasVar.addEventListener("mouseleave",myMouseL);
function myMouseL(e){
    mouseEvt="MouseL"
}
canvasVar.addEventListener("mousemove",myMouseM);
function myMouseM(e){
    curX=e.clientX-canvasVar.offsetLeft;
    curY=e.clientY-canvasVar.offsetTop;
    if (mouseEvt=="MouseD"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(prevX,prevY);
        ctx.lineTo(curX,curY);
        ctx.stroke();
    }
    prevX=curX;
    prevY=curY;
}
if (screen.width<992){
    canvasVar.width= screenWidth;
    canvasVar.height= screenHeight;
    document.body.style.overflow="hidden";
}
canvasVar.addEventListener("touchstart",mytouchstart);
function mytouchstart(e){
    prevX=e.touches[0].clientX-canvasVar.offsetLeft;
    prevY=e.touches[0].clientY-canvasVar.offsetTop;
}
canvasVar.addEventListener("touchmove",mytouchmove)
function mytouchmove(e){
    curX=e.touches[0].clientX-canvasVar.offsetLeft;
    curY=e.touches[0].clientY-canvasVar.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(prevX,prevY);
        ctx.lineTo(curX,curY);
        ctx.stroke();
}
function clear1(){
    console.log("inside clear");
    ctx.clearRect(0,0,canvasVar.width,canvasVar.height);
}