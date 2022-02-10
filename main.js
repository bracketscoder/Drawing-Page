var mouseEvent = "empty";
var last_postion_of_x, last_postion_of_y;
canvas=document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
color = "black";
width_of_line= 1;
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    mouseEvent="mousedown";

}

canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e){
    current_position_of_x= e.clientX - canvas.offsetLeft;
    current_position_of_y= e.clientY - canvas.offsetTop;

    if(mouseEvent=="mousedown") {
        ctx.beginPath();
        ctx.strokeStyle= color;
        ctx.lineWidth= width_of_line;

        console.log("Last position of x and y coordinates = ");
        console.log("x=" + last_position_of_x + "y=" + last_position_of_y);
        ctx.moveTo(last_position_of_x,last_position_of_y);


        console.log("current position of x and y coordinates = ");
        console.log("x=" + current_position_of_x + "y=" + current_position_of_y);
        ctx.lineTo(current_position_of_x,current_position_of_y);
        ctx.stroke(); }

        last_position_of_x= current_position_of_x;
        last_position_of_y = current_position_of_y;
    }
canvas.addEventListener("mouseleave", my_mouseleave);
canvas.addEventListener("mouseUP", my_mouseup);
function my_mouseup(e)
    {
        mouseEvent = "mouseup";
    }

function my_mouseleave(e)
{
    mouseEvent = "mouseleave";
}

function clearArea() {
    ctx.clearRect(0,0, ctx.canvas.width, ctx.canvas.height);
}
























