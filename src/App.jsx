import { useState, useEffect } from 'react';
import Axios from 'axios';

import './App.css'
import { Container, Row, Col, Form, Button, Table, Modal, ListGroup, Stack } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const [dados, setDados] = useState([]);
  const [tabelaPlanos, setTabelaPlano] = useState([])

  // ROTA PRA PEGAR OS DODOS JÁ EXISTENTES DOS PLANOS DE CONTAS NO BANCO DE DADOS
  // useEffect(()=> {
  //   Axios.get("URL").then((response) => {
  //     setTabelaPlano(response.data)
  //   }).catch((err) => console.log(err))
  // }, [])

  // ROTA PARA INSERIR OS DADOS DO PLANO DE CONTAS NO BANCO DE DADOS
  // const inserirplano = () => {
  // Axios.post("URL", {
  //   data: dados
  // }).then((response) => {
  //   console.log(response)
  // }).catch((err) => {
  //   confirm.log(err)
  // }) }

  const inserirDados = (value) => {
    setDados((data) => (
      {
        ...data,
        [value.target.name]: value.target.value,
      }
    ))
  }

  const addPlano = () => {
    setTabelaPlano((data) => [...data, dados])
  }

  console.log(dados)
  return (
    <>
      <NavBar />
      <Stack direction="vertical" className='Container'>
        <h1>CADASTRO DE PLANO DE CONTAS</h1>
        <Row className='Form'>
          <Col xs={4} as='div' >
            <Table
              responsive
              striped
              bordered
              hover
            >
              <tbody>
                {tabelaPlanos.map((plano) => {
                  return (
                    <tr key={plano.codigo}>
                      <td >{`${plano.codigo} ${plano.descricao}`}</td>
                    </tr>
                  )
                })}
              </tbody>
            </Table>
          </Col>
          <Col xs={5}>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Código</Form.Label>
                <Form.Control type="number" placeholder="Digite o código do plano" name="codigo" onChange={inserirDados} value={dados.codido} />
              </Form.Group>
              <Form.Select aria-label="Default select example" value={dados.tipo} onChange={inserirDados} name='tipo'>
                <option>Tipo de Plano</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
              <Form.Group className="mb-3" >
                <Form.Label>Descrição do plano</Form.Label>
                <Form.Control as="textarea" rows={3} name='descricao' onChange={inserirDados} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Button variant="primary" size="lg" className='Cadastrar' onClick={addPlano}>
          <Link className='.'> Cadastrar</Link>
        </Button>
      </Stack>
    </>
  )
}

export default App
