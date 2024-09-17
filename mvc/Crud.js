import conn from './properties.js'

class Crud {

  static teste(){
    return "ok"
  }

  //Pega todos os registros
  getAllCars(callback){
    let sql = "select * from carro"
    conn.query(sql, function(error,results,fields){
        if(error) throw error
        callback(results)
    })
        console.log(query.sql)
        conn.end()
  }

  //pega por Ids
  getById(cod, callback){
    let sql = "select * from carro where id = ?"
    conn.query(sql, cod, function(error, results, fields){
      if(error) throw error
      callback(results)
    })
      //console.log(query.sql)
      conn.end()
  }

  //Pega pelo nome
  getByName(cod, callback){
    let sql = "select * from carro where nomecarro = ?"
    conn.query(sql, id, function(error, results, fields){
      if(error) throw error
      callback(results)
    })
      console.log(query.sql)
      conn.end()
  }

  //salvar
  save(carro, callback){
    let sql = "insert into carro set ?"
    conn.query(sql, carro, function(error,results,fields){
        if(error) throw error

        carro.id = results.insertId
        callback(carro)
    })
   // console.log(query.sql)
    conn.end()
  }

  //Atualiza campos
  update(cod, carro, callback){
    let sql = "update carro set ? where id = ?"
    //let id = carro.id
    conn.query(sql, [carro,cod], function(error,results,fields){
      if(error) throw error
      callback(results)
    })  
    //console.log(query.sql)
    conn.end()
  }

  //Apagar
  delete(cod, callback){
    let sql = "delete from carro where id = ?"
    conn.query(sql, cod, function(error,results,fields){
      if(error) throw error
      callback(results)
    })  
   // console.log(query.sql)
    conn.end()
  }
}

export default Crud 

//module.exports = Crud