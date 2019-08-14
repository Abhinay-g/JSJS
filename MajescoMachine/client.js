const http = require('http');
var i = 0;
while (i < 1000) {
    i++;
    http.get('http://localhost:3000/cluster', (req, res) => {
        console.log("called service");
    })
}