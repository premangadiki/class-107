function start(){
    navigator.mediaDevices.getUserMedia({audio :true});
    classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/FPcauAjB2/',modelLoaded)
}

function modelLoaded(){
    classifier.classify( "audio",gotresult())
}

function gotresults(error , results){
    
}

