const http = require('http');
const fs = require('fs');

// Import required modules

// Create a server
const server = http.createServer((req, res) => {
    // Read the HTML file
    fs.readFile('/path/to/your/index.html', (err, data) => {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('File not found');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        }
    });
});

// Start the server
server.listen(3000, () => {
    console.log('Server is running on port 3000');
});