# JWT Authentication
This is an application that is used to explain how jwt works 

# Instructions to run
Clone the project
```
git clone https://github.com/sudheeshshetty/JWT_Auth.git
```
Install the dependencies
```
npm install
```
Start the server
```
npm start
```
Go to browser and open the url `localhost:3000`
The dummy users are 'xxxx' and 'yyyy' with pasword being the same as that of username.

Try logging in using different names and also with valid name and password.
You will get a token displayed if you login using valid username and password.

Try clicking `getlist` button  wihtout entering anything in the token text box.
You will see that you will get error message.

Try sending wrong token in that text box. You will still see the error.

Now try passing the valid token that was displayed in screen. You will see the list of users.
For this example we are passing the token through text box. You may edit the code so that the token will be stored somewhere and then when a user who has logged in clicks, you send that token so that it won't be a head ache for the user to copy the token everytime.
