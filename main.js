song_name1="";
song_name2="";
leftwristY=0;
leftwristX=0;
rightwristY=0;
rightwristX=0;

<script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.js"></script>

function setup()
{
canvas = createCanvas(600,500);
canvas.center();

video = createCapture(VIDEO);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
  }

  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      scoreRightWrist = results[0].pose.keypoints[10].score;
      scoreLeftWrist = result[0].pose.keypoints[9].score;
      console.log("scoreRightWrist = " + scoreRightWrist + "scoreLeftWrist = " + scoreLeftWrist);
  
  
      leftWristX = results[0].pose.leftWrist.x;
      leftWristY = results[0].pose.leftWrist.y;
      console.log("leftWristX  = " + leftWristX  + " leftWristY = "+ leftWristY );
  
      rightWristX = results[0].pose.rightWrist.x;
      rightWristY = results[0].pose.rightWrist.y;
      console.log("rightWristX  = " + rightWristX  + " rightWristY = "+ rightWristY );
  }
  
  }

function preload()
 {
song_name1 = loadSound(harry_potter.mp3);
song_name2 =loadSound(avenger.mp3);
 }

function draw()
 {
image(video, 0, 0, 600, 500);
 }