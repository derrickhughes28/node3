const http = require('http');
const fs = require('fs');
const _ = require('lodash');
 
const server = http.createServer((req, res) => {

    // lodash
  const num = _.random(0, 20);
  console.log(num);

  const greet = _.once(() => {
    console.log('hello');
  });
  greet();
  greet();


    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let path = './views';
    switch(req.url) {
        case '/':
            path += 'index.html'; 
            res.statusCode = 200;
            break;
            case './about':
            path += './about.html';
            res.statusCode = 200;
            break;
            case './about-me':
            res.setHeader('Location', '/about');
            res.end();
            res.statusCode = 301;
            break;
            default:
                path += '404.html';
                res.statusCode = 404;
                break; 
    }



    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            //res.write(data);
           
            res.end(data);
        }
    })

});

// const server = http.createServer((req, res) => {
//     console.log('request made');
// });

server.listen(3000, 'localhost', () =>{
    console.log('listening for requests on port 3000');
});

// listen for requests
app.listen(3000);
 
// register view engine
app.set('view engine', 'ejs');