 
 var intro;

function preload(){

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-130);
  intro = new Intro();
  form = new Form();
}

function draw(){

  intro.display(); 
  form.display();
}