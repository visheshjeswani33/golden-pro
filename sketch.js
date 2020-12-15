 var form;

function preload(){

}

function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  form = new Intro();
  
}

function draw(){

  form.display(); 
}