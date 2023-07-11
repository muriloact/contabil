import React, { useState } from "react";

import './MovimentoContabil.css';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import NavBar from "./components/NavBar";
import { Axios } from "axios";


function MovimentoContabil() {
    const [dados, setDados] = useState([]);
    const [tipo, setTipo] = useState('');


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
        inserirmovi()
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
    return (
        <>
            <NavBar />
            <Stack direction="vertical" className='Container'>
                <h1>MOVIMENTAÇÃO CONTABIL</h1>
                <Form>
                    <Row className='Form'>
                        <Col xs={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Número Lançamento</Form.Label>
                                <Form.Control type="text" placeholder="Digite o núemro aqui" onChange={inserirDados} name="lancamento" />
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Conta</Form.Label>
                                    <Form.Control type="text" placeholder="Digite a conta aqui" onChange={inserirDados} name="conta" />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Data</Form.Label>
                                    <Form.Control type="date" onChange={inserirDados} name="data" />
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