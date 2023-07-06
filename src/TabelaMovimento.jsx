import React from 'react';

import './TabelaMovimento.css'
import Table from 'react-bootstrap/Table';
import Stack from 'react-bootstrap/Stack';
import NavBar from './components/NavBar';


function TabelaMovimento() {
    return (
        <>
        <NavBar />
            <Stack direction="vertical" className='Container'>
                <h1>MOVIMENTAÇÃO CONTABIL</h1>
                <Table striped bordered hover>
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
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                        </tr>
                    </tbody>
                </Table>
            </Stack>
        </>
    );
}

export default TabelaMovimento;