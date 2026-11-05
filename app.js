const http = require("http");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html",
  });

  res.end(`
        <!DOCTYPE html>
        <html>
        <head>
            <title>Node.js CI/CD Demo</title>
        </head>
        <body>
            <h1>Hello! Welcome to my Node.js Demo Application.</h1>
            <h2>CI/CD Pipeline Successfully Deployed!</h2>
            <p>This application is built using Node.js and deployed using Docker and GitHub Actions.</p>
            <p>Version: 1.0.0</p>
        </body>
        </html>
    `);
});

server.listen(PORT, "0.0.0.0", () => {
  console.log(`Server is running on port ${PORT}`);
});
