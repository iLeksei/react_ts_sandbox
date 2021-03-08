const express = require("express");
const bodyParser = require("body-parser");

const mainRouter = require("./routes/mainRouter");
const tableRouter = require("./routes/tableRouter");

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    next();
});

app.use("/main", mainRouter);
app.use("/tableData", tableRouter)

app.use(bodyParser.json())
    .listen(1414, () => {
        console.log("server has started on 1414 port!");
    });