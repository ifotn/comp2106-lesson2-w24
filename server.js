let http = require('http');
let fs = require('fs');

http.createServer(async (req, res) => {
    switch (req.url) {
        case '/css/bootstrap.min.css': 
            fs.readFile('css/bootstrap.min.css', 'utf8', (err, cssContents) => {
                res.write(cssContents);
                res.end();
            });
            break;
        default: 
            fs.readFile('index.html', 'utf8', async (err, fileContents) => {
                if (err) {
                    console.log(err);
                }
                else {
                    // send html to browser
                    res.write(fileContents);

                    // axios api call goes here...don't forget to import axios above
                    /* code here - you need 3 lines:
                    1 - call API using axios using await keyword
                    2 - output <h2>
                    3 - output api data using JSON.stringify()
                    */
                    res.end();
                }
            });
    }   
}).listen(3000);