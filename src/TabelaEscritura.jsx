import React from 'react';

import './TabelaEscritura.css'
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavBar from './components/NavBar';


function TabelaEscritura() {
    return (
        <>
         <NavBar />
            <main className='Container'>
                <h1>MOVIMENTAÇÃO CONTABIL</h1>
                <Form className='Form'>
                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Nº Escritura Fiscal</Form.Label>
                        <Form.Control type="number" placeholder="Digite o número da escritura aqui." />
                    </Form.Group>
                    <Button variant="primary">
                        Buscar
                    </Button>
                </Form>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nº Lançamento</th>
                            <th>Data</th>
                            <th>Descrição</th>
                            <th>Valor</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Jacob</td>
                        </tr>
                    </tbody>
                </Table>
            </main>
        </>
    );
}

export default TabelaEscritura;