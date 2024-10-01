const express = require('express')
const app = express() //usar express

app.use(express.json()) //usar o express para requisição post

let personList = []

const port = 3000 //definição da porta
const nome = "Lucifer"

app.get('/visualizar', (req, res) =>{
    res.send(personList)
})

app.delete('/params/:id', (req, res) =>{
    const {id} = req.params //pegar o id(índice da lista)
    personList.splice(id, 1)
    res.send(` ${id} removido.`)
})

app.put('/atualizar/:id', (req, res) =>{ //https://www.geeksforgeeks.org/express-js-app-put-function/?ref=gcse_ind
    const {id} = req.params //pega o id
    const {name, age} = req.body

    if (personList[id]) {
        personList[id] = {name, age} //atualiza o nome e a idade
        res.send(`Usuário ${id} atualizado com sucesso.`) 
    }
    else
    {
        res.send('Usuário não encontrado.')
    }
}) //* testar no postman *//

app.post("/cadastrar", (req, res) =>{ //método http post | ("/") = endpoint
    const {name, age} = req.body
    personList.push({name, age})
    res.send(`Usuário recebido!!! ${name}`) //resposta
})

app.listen(port, () =>{ //"escutar" a porta
    console.log(`Example app listening on port ${port}`)
})

console.log("Hell!")