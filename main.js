var connection=new WebSocket("ws://localhost:8787",'json');
connection.onopen = function () {
  connection.send('Hello, Server!!'); //send a message to server once connection is opened.
};
connection.onerror = function (error) {
  console.log('Error Logged: ' + error); //log errors
};
connection.onmessage = function (e) {
  console.log('Received From Server: ' + e.data); //log the received message
};
