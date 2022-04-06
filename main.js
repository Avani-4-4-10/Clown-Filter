nosey=""
function prelaod(){
nosey = loadImage("https://i.postimg.cc/BQZ8gbw5/clown-nosey-removebg-preview.png")
}


noseX=0
noseY=0

function setup(){
    canvas=createCanvas(300 , 300)
    canvas.center()
    video = createCapture (VIDEO)
    video.size(300 , 300)
    video.hide()
    posenet=ml5.poseNet(video , modelLoaded)
    posenet.on("pose" , gotPoses)
}
function gotPoses(results){
    if (results.length > 0){
        console.log(results)
        
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log(noseX , noseY)
    
    }
}
function modelLoaded(){
    console.log("poseNet is initialized")
}
function draw(){
   image(video , 0 , 0 , 300 , 300)
  
    image(nosey , noseX , noseY , 70 , 70)
}
function take_snapshot(){
    save("MyFilterImage.png")
}