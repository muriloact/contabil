import React from "react";

import './MovimentoContabil.css';
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'; 
import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';
import NavBar from "./components/NavBar";


function MovimentoContabil() {
    return (
        <>
        <NavBar />
            <Stack direction="vertical" className='Container'>
                <h1>MOVIMENTAÇÃO CONTABIL</h1>
                <Form>
                    <Row className='Form'>
                        <Col xs={4}>
                            <Form.Group className="mb-3">
                                <Form.Label>Númeroo Lançamento</Form.Label>
                                <Form.Control type="text" placeholder="Digite o núemro aqui" />
                            </Form.Group>
                        </Col>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Conta</Form.Label>
                                    <Form.Control type="text" placeholder="Digite a conta aqui" />
                                </Form.Group>
                            </Col>
                            <Col xs={4}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Data</Form.Label>
                                    <Form.Control type="date" />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Valor Débito</Form.Label>
                                    <Form.Control type="number" placeholder="Digite o valor aqui" />
                                </Form.Group>
                            </Col>
                            <Col xs={6}>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Valor Crédito</Form.Label>
                                    <Form.Control type="number" placeholder="Digite o valor aqui" />
                                </Form.Group>
                            </Col>
                        </Row>
                    </Row>
                </Form>
                <Row className="ContainerBotao">
                    <Button variant="success" size="lg" className='Cadastrar'>
                        ENTRADA
                    </Button>
                    <Button variant="danger" size="lg" className='Cadastrar'>
                        SAIDA
                    </Button>
                </Row>
            </Stack>
        </>
    );
};


export default MovimentoContabil;