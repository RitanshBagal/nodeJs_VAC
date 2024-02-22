const express = require('express');
const app = express();
const port = 3000;

const {connection} = require("./db/db_config");

app.get('/', (req, res) => {
    let language = req.query.language;
    connection.query(`SELECT * FROM movie_data WHERE language = ?`,
    [language],
    (err, results)=>{
        if(err){
            console.log(`Error in query!`);
            res.send("Error in DB query")
        }
        else{
            console.log(results);
            res.send(results);
        }
    })
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});