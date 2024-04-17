const http = require('http');

// Define the hostname and port for the server to listen on
const hostname = '0.0.0.0'; // Listen on all network interfaces
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  // Set the HTTP response header
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  // Send a response message
  res.end('Hello, World!\n');
});

// Start the server and listen for incoming requests
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
