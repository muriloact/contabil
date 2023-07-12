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

app.get('/consultarVendas',(req,res)=>{
    let SQL = 'SELECT .Forma_Pagamento, v.Valor, v.procedimento from Ve_Itens_da_Venda v inner join ag_agenda a on Ve_Itens_da_Venda.Id_Procedimento = ag_procedimentos.id_procedimento'

    db.query(SQL,(err,result) =>{
        if(err)console.log(err);
        else res.send(result);
    });
});

app.post('/cadastrarMovimentoContabil', (req, res) => {
    const {data} = req.body;
    console.log(data);

    let query1 = 'select Id_Vendas from Ve_Itens_da_Venda';
    let test
    db.query(query1,(err,query12)=>{
        console.log(err);
        test= query12;
    })

    let query2 = 'select num_ordem_comp from est_ordem_de_compra';
    let test2
    db.query(query2,(err,Query13)=>{
        console.log(err);
        test2 = Query13;
    })

    let SQL = `INSERT INTO Co_MovimentoContabil(NumeroLancamento,Descricao_Vendas,Descricao_Estoque,Conta,Data,ValorDebito,ValorCredito) VALUES (?,${test},${test2},?,?,?)`;

    db.query(SQL,[data.numero,data.data,data.descricaoV,data.descricaoE,data.conta,data.valorD,data.valorC],(err,result)=>{
        console.log(err);
        res.send(result);
    })
})

app.get('/consultarMovimentoContabil', (req, res)=>{
    let SQL = 'SELECT * FROM concipecom_fasiclin.Co_MovimentoContabil order by IdMovimentoContabil';

    db.query(SQL,(err,result)=>{
        if(err) console.log(err);
        else res.send(result);
    });
});

app.listen(3001,() => {
    console.log('Esta rodando');
});