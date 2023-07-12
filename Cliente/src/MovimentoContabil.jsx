import React, { useEffect, useState } from "react";

import './MovimentoContabil.css';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import NavBar from "./components/NavBar";
import Axios from "axios";


function MovimentoContabil() {
    const [dados, setDados] = useState([]);
    const [tipo, setTipo] = useState('');
    const [conta, setConta] = useState([]);

    useEffect(() => {
        consultarConta()
    }, [])


    const inserirDados = (value) => {
        setDados((data) => (
            {
                ...data,
                [value.target.name]: value.target.value,
            }
        ))
    }

    const tipomovi = (value) => {
        setTipo(value)
        console.log(tipo)
        // inserirmovi()
        lancamento()
    }

    const lancamento = ()=>{
        setDados((data) => (
            {
                ...data,
                "NumeroLancamento" : alphanumerico
            }
        ))
    }

    const AlphaNumeric = () => {
        return Math.random().toString(20).slice(-10);
    }

    const alphanumerico = Array.apply(null, Array(1)).map(AlphaNumeric);
    

    const consultarConta = () => {
        Axios.get('http://localhost:3001/consultarConta').then((response) => {
            setConta(response.data)
        }).catch((err) => {
            console.log(err);
        })
    }

    // ROTA PARA INSERIR OS DADOS DA MOVIMENTAÇÃO NO BANCO DE DADOS
    // const inserirmovi = () => { Axios.post("URL", {
    //   data: dados,
    //   tipo: tipo
    // }).then((response) => {
    //   console.log(response)
    // }).catch((err) => {
    //   confirm.log(err)
    // }) }


    console.log(dados)
    // console.log(alphanumerico)

    return (
        <>
            <NavBar />
            <Stack direction="vertical" className='Container'>
                <h1>MOVIMENTAÇÃO CONTABIL</h1>
                <Form>
                    <Row>
                        <Col xs={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Número Lançamento</Form.Label>
                                <Form.Control
                                    type="text"
                                    value={alphanumerico}
                                    // placeholder={inserirDados}
                                    
                                    name="NumeroLancamento"
                                />
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col xs={6}>
                                {/* <Form.Group className="mb-3" >
                                    <Form.Label>Conta</Form.Label>
                                    <Form.Control
                                    type="text"
                                    placeholder="Digite a conta aqui"
                                    onChange={inserirDados}
                                    name="conta" />
                                </Form.Group> */}
                                <Form.Label>Conta</Form.Label>
                                <Form.Select aria-label="Default select example">
                                    {conta.map((res) => (
                                        
                                        <>
                                            <option key={res.idPlanoContas}> {`${res.CodigoPlano} ${res.Tipo}`}</option>
                                        </>
                                        
                                    ))}
                                </Form.Select>
                            </Col>
                            <Col xs={4}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Data</Form.Label>
                                    <Form.Control
                                        type="date"
                                        onChange={inserirDados}
                                        name="data" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Valor Débito</Form.Label>
                                    <Form.Control type="number" placeholder="Digite o valor aqui" onChange={inserirDados} name="debito" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Valor Crédito</Form.Label>
                                    <Form.Control type="number" placeholder="Digite o valor aqui" onChange={inserirDados} name="credito" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Row>
                </Form>
                <Row className="ContainerBotao">
                    <Button variant="success" size="lg" className='Cadastrar' value="entrada" onClick={(e) => tipomovi(e.target.value)}>
                        ENTRADA
                    </Button>
                    <Button variant="danger" size="lg" className='Cadastrar' value="saida" onClick={(e) => tipomovi(e.target.value)}>
                        SAIDA
                    </Button>
                </Row>
            </Stack>
        </>
    );
};


export default MovimentoContabil;