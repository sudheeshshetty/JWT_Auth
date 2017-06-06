var express = require('express');
var app=express();
var bodyParser= require('body-parser');

var users=[
{
  name:"xxxx",
  password:"xxxx"
},
{
  name:"yyyy",
  password:"yyyy"
}
]
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({     
    extended: true
}));

app.use(express.static('./')); 

app.get('/', (req,res)=>{
    res.sendFile('index.html');
});

app.post('/login',(req,res)=>{
    console.log(req.body);
    var message;
    for(var user of users){
      if(user.name!=req.body.name){
          console.log("1");
          message="Wrong Name";
      }else{
          if(user.password!=req.body.password){
              console.log("2");
              message="Wrong Password";
              break;
          }
          else{
              console.log("3");
              message="Login Successful";
              break;
          }         
      }
    }
    res.send(message);
});

app.post('/getusers',(req,res)=>{
    console.log("here");
    var user_list=[]
    users.forEach((user)=>{
        user_list.push({"name":user.name});
    })
    res.send(JSON.stringify({users:user_list}));
});

app.listen(3000, function(){
  console.log('listening on port 3000');
});