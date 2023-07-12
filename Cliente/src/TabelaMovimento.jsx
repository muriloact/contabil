import React, { useEffect, useState } from 'react';
import  Axios  from 'axios';

import './TabelaMovimento.css'
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import NavBar from './components/NavBar';


function TabelaMovimento() {
    const [tabelaMovi, setTabelaMovi] = useState([]);

    // ROTA PARA PEGAR OS DADOS DA TABELA DE MOVIMENTAÇÃO
    // useEffect(() =>{
    //     Axios.get("URL").then((response) => {
    //         setTabelaMovi(response.data)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // },[])

    
    return (
        <>
        <NavBar />
            <Stack direction="vertical" className='Container'>
                <h1>MOVIMENTAÇÃO CONTABIL</h1>
                <Table
                            striped
                            bordered
                            hover
                        >
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Nº Lançamento</th>
                                    <th>Conta</th>
                                    <th>Data</th>
                                    <th>V. Débito</th>
                                    <th>V. Crédito</th>
                                    <th>Valor</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabelaMovi.map((movi) => (
                                    <tr key={movi.idMovimentoContabil}>
                                        <td>{movi.NumeroLancamento}</td>
                                        <td>{movi.conta}</td>
                                        <td>{movi.data}</td>
                                        <td>{movi.debito}</td>
                                        <td>{movi.credito}</td>
                                        <td>{movi.valor}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
            </Stack>
        </>
    );
}

export default TabelaMovimento;