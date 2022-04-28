function preload(){
}

function setup() {
    canvas = createCanvas(900, 400);
    canvas.position(400,590);
    video=createCapture(VIDEO);
   video.hide();
   tint_color="";

   translate(590, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
  translate(600, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(10, 30, 20, 80);
    rotate(PI/5);
  }
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 50, 20, 80);
    rotate(PI/5);
    fill("#03a9f4")
  }
  translate(500, 260);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
    fill("blue")
    stroke("blue")
  }
  translate(580, 200);
  noStroke();
  for (let i = 0; i < 10; i ++) {
    ellipse(0, 30, 20, 80);
    rotate(PI/5);
  }
}

function draw() {
 tint(tint_color);
    image(video,100,80,300,250);

    stroke("#ADD8E6");
    fill("#ADD8E6");
    
    circle(40,40,50);
    circle(460,40,50);
    circle(40,360,50);
    circle(460,360,50);

    stroke(50, 168, 82);
    fill("pink");

    rect(63, 27, 375, 25);
    rect(63, 347, 375, 25);
    rect(27, 63, 25, 275);
    rect(448, 63, 25, 275);

    stroke("pink");
    fill("pink");
    translate(600, 260);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 10, 20, 80);
      rotate(PI/5);
    }
    stroke("blue");
    fill("blue");
    translate(650, 260);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 10, 20, 80);
      rotate(PI/5);
    }
    stroke("pink");
    fill("green");
    translate(700, 300);
    noStroke();
    for (let i = 0; i < 10; i ++) {
      ellipse(0, 10, 20, 80);
      rotate(PI/5);
    }
}
function filter_color(){
    tint_color=document.getElementById("input_color").value;
}
function take_snapshot(){
    save('Filter_Applied_Photo.png');
}
function draw(){
  document.getElementById("myCanvas2").draw=rect(-90, 0.5, 375, 25); circle(80, -80, 675, 52);
}