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

// Creating database
const creation_query = ' \
CREATE TABLE IF NOT EXISTS `people` ( \
    `id` int(11) NOT NULL AUTO_INCREMENT, \
    `name` varchar(255) DEFAULT NULL, \
    PRIMARY KEY (`id`) \
  ) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1; \
'
connection.query(creation_query)

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
        let text = "<h1>Full Cycle Rocks!</h1><ul>"
        for (let i = 0; i < result.length; i++){
            text += "<li>" + result[i].name + "</li>"
        }
        text += "</ul>"
        // console.log(text)
        res.send(text)
    })
    connection.end()
})

app.listen(port, () => {
    console.log('Running at port: ' + port)
})