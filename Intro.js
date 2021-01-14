class Intro{

 constructor(){

  this.title = createElement('h1')
  this.title2 = createElement('h2')
  this.button = createButton('NEXT')
  
 }

 display(){
  this.title.html("Moneyology");
  this.title.position(displayWidth/8, displayHeight/8);
  this.title2.html("Learn skills to earn money by investing online...");
  this.title2.position(displayWidth/8, displayHeight/8 + 50);
  this.button.position(displayWidth-70, displayHeight-180);
 
  var logo = document.createElement("img");
  logo.src = "images/logo.png";
  logo.width = 100;
  logo.height = 100;
  document.body.appendChild(logo);

  var form;

  this.button.mousePressed(()=>{

 form = new Form();
 form.display();
 
 // go.path(form)
  });


 }

 


 

}
