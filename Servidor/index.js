const mysql2 = require('mysql2');
const cors = require('cors');
const express = require('express');
const app = express();

app.use(cors());
app.use(express.json());

const db = mysql2.createPool({
    host:"concipe.com.br",
    user:"concipecom_fasiclin",
    password:"db_aluno2023",
    database:"concipecom_fasiclin",
});

app.post('/cadastrarPlano', (req, res) => {
    const {data} = req.body;
    console.log(data);
    let SQL = `INSERT INTO Co_PlanoContas(CodigoPlano,Tipo,Descricao) VALUES (?,?,?)`;

    db.query(SQL,[data.codigo,data.tipo,data.descricao],(err,result)=>{
        console.log(err);
        res.send(result);
    })
})
 
app.get('/getPlanosCadastrados', (req, res)=>{
    let SQL = 'SELECT * FROM concipecom_fasiclin.Co_PlanoContas order by CodigoPlano';

    db.query(SQL,(err,result)=>{
        if(err) console.log(err);
        else res.send(result);
    });
});

app.get('/consultarConta', (req, res)=>{
    let SQL = 'SELECT idPlanoContas,CodigoPlano,Tipo FROM concipecom_fasiclin.Co_PlanoContas order by CodigoPlano';

    db.query(SQL,(err,result)=>{
        if(err) console.log(err);
        else res.send(result);
    });
});

app.post('/cadastrarMovimentoContabil', (req, res) => {
    const {data} = req.body;
    console.log(data);
    let SQL = `INSERT INTO Co_MovimentoContabil(NumeroLancamento,Data,Descricao) VALUES (?,?,?)`;

    db.query(SQL,[data.codigo,data.tipo,data.descricao],(err,result)=>{
        console.log(err);
        res.send(result);
    })
})


app.listen(3001,() => {
    console.log('Esta rodando');
});