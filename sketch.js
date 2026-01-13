function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0, 0, 255);
  fill(255, 255, 0);
  noStroke();
  rect(0, 0, 200, 400);

  fill(255, 255, 255);
  stroke(0, 0, 0);
  strokeWeight(6);
  textAlign(CENTER, CENTER);
  textSize(30);
  text("Patience is key - \nDon't lose your balance!", 200, 200);
}
