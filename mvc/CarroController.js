//import Crud from '../Crud'
import Crud from '../mvc/Crud.js'
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

    app.get('/teste2', function(req,res){
        res.redirect("teste.html")
    })

    app.get('/salvar', function(req,resp){
        crud.save()
    })

    router.post('carros', function(req,res){
        let carro = req.body 
        crud.save(carro, function(carro){
            res.json(carro)
        })
    })

    app.post('inserir', function(req,res){
        const { val1, val2 } = req.body;

        const carro = {nomecarro:val1, cor:val2}        
        crud.save(carro, function(carro){
            res.json(carro)
        })
    })




    let server = app.listen(3000, function(){
    let host = server.address().address
    let port = server.address().port
    console.log("Servidor iniciado em http://%s:%s", host, port)
})






