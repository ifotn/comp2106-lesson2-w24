let http = require('http');
let fs = require('fs');

http.createServer((req, res) => {
    switch (req.url) {
        case '/css/bootstrap.min.css': 
            fs.readFile('css/bootstrap.min.css', 'utf8', (err, cssContents) => {
                res.write(cssContents);
                res.end();
            });
            break;
        default: 
            fs.readFile('index.html', 'utf8', (err, fileContents) => {
                if (err) {
                    console.log(err);
                }
                else {
                    // send html to browser
                    res.write(fileContents);
                    res.end();
                }
            });
    }   
}).listen(3000);