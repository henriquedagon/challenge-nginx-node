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

// Displays
app.get('/', (req, res) => {
    const select_query = `select name from people`
    const connection = mysql.createConnection(config)    
    connection.query(select_query, function (err, result) {
        if (err) throw err
        // console.log(result)
        let text = "<h1>Full Cycle Rocks!</h1>"
        for (let i = 0; i < result.length; i++){
            text += "<br>" + result[i].name
        }
        // console.log(text)
        res.send(text)
    })
    connection.end()
})

app.listen(port, () => {
    console.log('Running at port: ' + port)
})