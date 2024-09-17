import Crud from '../Crud.js'
//import Crud from '../mvc/Crud'
import express from 'express'

import path from 'path'
import { fileURLToPath } from 'url';
import bodyParser from 'body-parser';

// Necessário para obter __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = express()
const router = express.Router()

//Instância da classe - funciona como prototype
const crud = new Crud()

app.use(bodyParser.urlencoded({ extended: true }));

// Configurar o body-parser para dados JSON
app.use(bodyParser.json());


app.use(express.static(path.join(__dirname, '../../pages/public')))

    app.get('/', function(req,res){       
        res.send("Olá express")
    })

    //Gravar no Banco de Dados
    app.get('/gravar', function(req,res){
        res.redirect("teste.html")
    })

    app.post('/inserir', function(req,res){
        const { val1, val2 } = req.body;

        const carro = {"nomecarro":val1,"cor":val2}        
        crud.save(carro, function(carro){
            res.json(carro)
        })
    })

    //Atualizar no banco de Dados
    app.get('/atualiza', function(req,res){
        res.redirect("atualizar.html")
    })

    app.post('/atualizar', function(req,res){
        const {id, val1, val2 } = req.body;

        //let ids = parseInt(id)

        const carro = {"id":id,"nomecarro":val1,"cor":val2}        
        crud.update(carro.id, carro, function(carro){
            res.json(carro)
           // alert("Atualizar")
        })
    })

    app.get('/delete', function(req, res){
        res.redirect("apagar.html")
    })

    app.post('/deletar', function(req, res){
        const {id} = req.body;
        //id = parseInt(id)
        const carro = {"id": id}
        crud.delete(carro.id, function(carro){
            res.json(carro)
        })
    })

    app.get('/select', function(req, res){
        res.redirect("selecionar.html")
    })

    app.post('/selecionarporid', function(req, res){
        const {id} = req.body;
        const carro = {"id":id}
        crud.getById(carro.id, function(carro){
            res.json(carro)
        })
    })



    //Teste com router
    app.get('/update', function(req,res){
        res.redirect("atualizar.html")
    })

    app.put('/atualizar', function(req,res){



        const {id, val1, val2 } = req.body;

        //let ids = parseInt(id)

        const carro = {"id":id,"nomecarro":val1,"cor":val2}        

        const myInitPost = {
            method: rest,
            body: JSON.stringify(carro),
            headers: {
              "Content-Type": "application/json",
            },
          };

          const dados = fetch('atualizar', myInitPost)

        crud.update(dados.id, dados, function(dados){
            res.json(dados)
           // alert("Atualizar")
        })
    })


    let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})






