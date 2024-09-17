import mysql from 'mysql2'

const connection = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"fatec123",
    database:"auto"
})

connection.connect()

export default connection