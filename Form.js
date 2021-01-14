 class Form { 

    constructor(){

     //this.logo = createImage()
     this.title = createElement('h2');
     this.name = createInput("Name");
     this.email = createInput("Email");
     this.password = createInput("Password");
     this.Login = createButton('Login');
     this.title2 = createElement('h6');
     this.signup = createButton('Signup');

    }

    display(){

      var user;
      user = new User();

      this.title.html("Login To Continue...");
      this.email.position(200,200);
      this.password.position(200,300);
      this.Login.mousePressed(()=>{
      
      user.name = this.name.value();
      user.email = this.email.value();
      user.password = this.password.value();
      //var pwdRef = database.ref('pwd')
      //pwdRef.on("value", function(data));
      //pwd1= data.val();
      });
    }

 }