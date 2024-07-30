status="";

function setup(){
    canvas=createCanvas(480,380);
    canvas.center();
    img=createCapture(VIDEO);
    img.hide();
    img.size(480,380);
}

function start(){
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Objects";
    input=document.getElementById("text_input").value;

}
function modelLoaded(){
    console.log("modelLoaded");
    status="true";
}
function draw(){
    image(img, 0,0,480,380);
}