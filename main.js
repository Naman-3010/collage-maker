var speechRecognition=window.webkitSpeechRecognition;

var recognition=new speechRecognition();

function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
}

recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transscript;

    console.log(content);
    speak();
}

function speak(){ 
    
    var synth = window.speechSynthesis;
    
    speak_data = "Taking you Selfie in 5 seconds";


 var utterThis = new SpeechSynthesisUtterance(speak_data);
 
 synth.speak(utterThis);
 
 Webcam.attach(camera);
 setTimeout(function (){
    take_snapshot();
    save();
},5000);
}

camera = document.getElementById("camera");

Webcam.set({ width:360, height:250, image_format : 'jpeg', jpeg_quality:90 });

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result1").innerHTML="<img id='selfie_image1' src='"+data_uri+"'>";
        document.getElementById("result2").innerHTML="<img id='selfie_image2' src='"+data_uri+"'>";
        document.getElementById("result3").innerHTML="<img id='selfie_image3' src='"+data_uri+"'>";
    });
}

function save(){
    link1=document.getElementById("link1");
    link2=document.getElementById("link2");
    link3=document.getElementById("link3");
    img=document.getElementById("selfie_image1").src;
    img=document.getElementById("selfie_image2").src;
    img=document.getElementById("selfie_image3").src;
    link1.href=img1;
    link2.href=img2;
    link3.href=img3;
    link1.click();
    link2.click();
    link3.click();
}