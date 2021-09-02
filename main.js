noseX = 0;
noseY = 0;
leftwristX = 0;
rightwristX = 0;
difference = 0; 
function setup() {
    canvas = createCanvas(550,550)
    canvas.position(550,120)

    video = createCapture(VIDEO)
    video.size(500,500)

    poseNet = ml5.poseNet(video , modelLoaded)
    poseNet.on("pose" , gotposes)
}

function modelLoaded() {
    console.log("posenet model is working")
}

function gotposes(results) {
    if (results.length > 0) {
        consonle.log(results)

        noseX = results[0].pose.nose.x
        noseY = results[0].pose.nose.y
    }
    
}

function draw() {
    background("#ff7733")
}


