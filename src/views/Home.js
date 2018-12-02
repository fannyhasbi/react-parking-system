import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Button } from 'reactstrap';

const Home = () => (
  <div>
    <Jumbotron className="text-center alert alert-info" fluid>
      <Container fluid>
        <h1>Parkir QR Scan</h1>
        <p>Aplikasi ini berguna untuk memudahkan pendataan kendaraan di tempat parkir di kawasan Universitas Diponegoro.</p>
        <Link to="/control/scan">
          <Button color="primary">Masuk</Button>
        </Link>
      </Container>
    </Jumbotron>
  </div>
);

export default Home;