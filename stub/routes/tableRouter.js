const express = require("express");

const tableRouter = express.Router();
const tableData = require("./data/tableData");

tableRouter.get("/", (req,res) => {
    console.log("response: {tableData}", tableData);
    res.json(tableData);
});

module.exports = tableRouter;