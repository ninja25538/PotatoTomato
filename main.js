var connection = new WebSocket('ws:ninja25538.github.io/PotatoTomato/index', ['soap', 'xmpp']);
// When the connection is open, send some data to the server
connection.onopen = function () {
  connection.send('Ping'); // Send the message 'Ping' to the server
};

// Log errors
connection.onerror = function (error) {
  alert('WebSocket Error ' + error);
};

// Log messages from the server
connection.onmessage = function (e) {
  alert('Server: ' + e.data);
};
