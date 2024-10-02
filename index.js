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

app.put('/atualizar/:id', (req, res) =>{ //https://www.geeksforgeeks.org/difference-between-put-and-post-http-request-in-express-and-postman/?ref=gcse_ind
    const {id} = req.params
    const {name, age} = req.body
    const index = parseInt(id) //converte o id em número(?)

    console.log(id)

    if (index >= 0 && index < personList.length) //usar o "id" ou o "req.params" não funcionava, "index" OK
    {// verifica se o index é 0 ou maior e menor que o total da lista
        personList[index] = {name, age} //atualiza o nome e a idade
        res.send(`Usuário ${id} atualizado com sucesso.`)
    }
    else
    {
        res.send('Usuário não encontrado.')
    }
}) //tinha esquecido de tirar ":" da url no postman =(

app.post("/cadastrar", (req, res) =>{ //método http post | ("/") = endpoint
    const {name, age} = req.body
    personList.push({name, age})
    res.send(`Usuário recebido!!! ${name}`) //resposta
})

app.listen(port, () =>{ //"escutar" a porta
    console.log(`Example app listening on port ${port}`)
})

console.log("")