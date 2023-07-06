import { useState } from 'react'

import './App.css'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Stack from 'react-bootstrap/Stack';
import { Link } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {

  return (
      <>
        <NavBar />
            <Stack direction="vertical" className='Container'>
        <h1>CADASTRO DE PLANO DE CONTAS</h1>
        <Row className='Form'>
          <Col xs={4} as='div' >
            <ListGroup>
              <ListGroup.Item>1.0 Descrição 1</ListGroup.Item>
              <ListGroup.Item>1.1 Descrição 1.1</ListGroup.Item>
              <ListGroup.Item>2.0 Descrição 2.0</ListGroup.Item>
              <ListGroup.Item>2.1Descrição 2.1</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col xs={5}>
            <Form>
              <Form.Group className="mb-3" >
                <Form.Label>Código</Form.Label>
                <Form.Control type="number" placeholder="Digite o código do plano" />
              </Form.Group>
              <Form.Select aria-label="Default select example">
                <option>Tipo de Plano</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </Form.Select>
              <Form.Group className="mb-3" >
                <Form.Label>Descrição do plano</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
          </Col>
        </Row>
        <Button variant="primary" size="lg" className='Cadastrar'>
         <Link to='/movimento' className='.'> Cadastrar</Link>
        </Button>
            </Stack>
      </>
  )
}

export default App
