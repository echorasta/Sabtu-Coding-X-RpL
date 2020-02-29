const http = require("http");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>This is home page.</p></body></html>");
        res.end();

    } else if (req.url == "/profile") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>This is profile page.</p></body></html>");
        res.end();
    } else if (req.url == "/admin") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>This is admin page.</p></body></html>");
        res.end();
    } else if (req.url == "/Rifky") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>This is Rifky page.</p></body></html>");
        res.end();
    } else if (req.url == "/Maulana") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>This is Maulana page.</p></body></html>");
        res.end();
    } else if (req.url == "/echo") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>This is echo page.</p></body></html>");
        res.end();
    } else if (req.url == "/wafiansyah") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>This is wafiansyah page.</p></body></html>");
        res.end();
    } else if (req.url == "/alam") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>This is alam page.</p></body></html>");
        res.end();
    } else if (req.url == "/david") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>This is david page.</p></body></html>");
        res.end();
    } else if (req.url == "/dzikri") {
        res.writeHead(200, { "Content-Type": "text/html"});
        res.write("<html><body><p>This is dzikri page.</p></body></html>");
        res.end();
    } else {
        res.end("Invalid Request!");
    }
});

console.log('Server running in port 3008');

server.listen(3008);