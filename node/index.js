const express = require('express')
const app = express()
const port = 3000

// Connecting
const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};
const mysql = require('mysql')
const connection = mysql.createConnection(config)

// Inserting
const insert_query = `insert into people(name) values('Henrique')`
connection.query(insert_query)
connection.end()

// Displays "{name} Rocks!"
app.get('/', (req, res) => {
    const select_query = `select name from people limit 1`
    const connection = mysql.createConnection(config)    
    connection.query(select_query, function (err, result) {
        if (err) throw err
        console.log(result)
        res.send(result[0].name + " Rocks!")
    })
    connection.end()
    
})

app.listen(port, () => {
    console.log('Running at port: ' + port)
})