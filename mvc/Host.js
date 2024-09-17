//const express  = require( 'express')
import express from 'express'
const app = express()


    app.get('/', function(req,res){
        res.send("Olá express")
    })


    let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})






