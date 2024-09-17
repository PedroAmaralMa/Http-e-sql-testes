import Crud from './Crud.js';

const crud = new Crud();

function gravar() {
const carro = {"nomecarro":"monza","cor":"verde"}        
        crud.save(carro, function(carro){
           // res.json(carro)
        })
}

//gravar()

function atualizar(){
    const carro = {"id":18,"nomecarro":"porsche","cor":"prata"}  
    crud.update(carro.id,carro, function(carro){

    })

}

atualizar()



















