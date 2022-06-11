Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:500
    });
    camera=document.getElementById("camera");
    Webcam.attach(camera);
    function takesnapshot(){
    Webcam.snap(
        function(data_uri){ 
        document.getElementById("result").innerHTML='<img id="snap" src="'+data_uri+'">'});}
        console.log("ml5version",ml5.version);
        classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/-3ZDtLBER/model.json',modelLoaded);
        function modelLoaded(){
        console.log("modelLoaded");
        }
        function check(){
            img=document.getElementById('snap');
            classifier.classify(img,gotResult);
            }
            function gotResult(error,results){
            if(error){
            console.log(error);
            }else{
            console.log(results);
            document.getElementById("object_name").innerHTML=results[0].label;
            document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(2);
            }
            }