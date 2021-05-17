import './App.css';
import Calendar from './pages/Calendar';
import Todo from './pages/Todo';
import { Container, Row, Col } from './components/Grid';

function App() {
  return (
    <Container className='app'>
      <Row>
        <Col size='m7 s12'>
          <Calendar />
        </Col>
        <Col size='m5 s12'>
          <Todo />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
