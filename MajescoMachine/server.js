const cluster = require('cluster');
const numCPUs = require('os').cpus().length;


if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running`);

    // Fork workers.
    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();
    }

    //Check if work id is died
    cluster.on('exit', (worker, code, signal) => {
        console.log(`worker ${worker.process.pid} died`);
    });

} else {
    // This is Workers can share any TCP connection
    // It will be initialized using express
    console.log(`Worker ${process.pid} started`);
    let worker = cluster.worker.id;
    const express = require('express');
    var app = express();
    app.get('/cluster', (req, res) => {
        console.log(`Running on worker with id ==> ${worker}`);

        res.send(`Running on worker with id ==> ${worker}`);
    });

    app.listen(3000, function () {
        console.log('Your node is running on port 3000' + `Running on worker with id ==> ${worker}`);
    });
}