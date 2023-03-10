var http = require("http");

const PORT = 8081;

const httpServer = http.createServer(handleServer);


function handleServer(req, res) {
  
 switch(req.url){
  case "/welcome":
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end("Welcome to Dominos!");
    break;
  case "/contact":
   res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
    phone: '18602100000',
    email: 'guestcaredominos@jublfood.com'
    }));
    break;
  default:
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end("Not found");
 }
}
httpServer.listen(PORT);
module.exports = httpServer;