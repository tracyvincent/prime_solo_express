# prime_peer_express

Create a basic node application using npm init. 

Add an app.js file. This is your entry point.

Install express using npm install express.

Set up a basic route to serve an index.html file.

Set up basic file serving using express.static, from a folder called "static".

Put a client side JavaScript file in your static folder.

Add a script tag in your index.html file that has src referencin this file. Fire an alert on the client side to make sure it works.

Next, make a folder called "modules".

Put your three module files from peer_00 into this folder.

Require them in your app.js file.

Set up a new route on "/balance" that will use the required files to send the account balance.

Use $.ajax to display this on the page. 

## HARD MODE

Add a button that will get a make a new Ajax call to the server, and display the new random balance on the page.

## PRO MODE

Add two inputs on your index.html file. One for a high number and one for a low number. 

Using jQuery and Ajax, get the value from these inputs when the user clicks the button. 
