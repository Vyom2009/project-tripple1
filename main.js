var prediction1="";
var prediction2="";

Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:110
});
Webcam.attach('camera');
function take_snapshot(){
    Webcam.snap(function(clickedpic){
        document.getElementById("gesturepic").innerHTML='<img id="pic" src="'+clickedpic+'">';
      });
}
console.log("version is ",ml5.version);
var savemodel=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/NfZc4m2RR/.json",modelLoaded);

function modelLoaded(){
    console.log("Model is loaded here!");
}