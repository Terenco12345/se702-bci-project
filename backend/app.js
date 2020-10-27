var fs = require("fs");
const express = require('express')
const app = express()
const port = 5000

app.use(express.json());

app.use((req, res, next) => {
    res.append('Access-control-Allow-Origin', ["http://localhost:3000"]);
    res.append('Access-control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.append('Access-control-Allow-Headers', 'Content-Type');
    res.append('Access-control-Allow-Credentials', true);
    next();
});

app.post('/', (req, res) => {
    console.log(req.body);
    fs.writeFile(
        "./"+req.body.experiment.participantId+".json",
        JSON.stringify(req.body), "utf8",
        () => { console.log("File saved.") }
    );
    res.send(200)
})

app.listen(port, () => {
    console.log(`Backend for BCI listening at http://localhost:${port}`)
})