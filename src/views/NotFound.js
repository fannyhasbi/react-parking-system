import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container } from 'reactstrap';

const NotFound = () => (
  <div>
    <Jumbotron className="text-center" fluid>
      <Container fluid>
        <h1>404</h1>
        <p>Maaf, halaman yang Anda cari tidak terdaftar.</p>
        <p>Kembali ke <Link to="/">Halaman Utama</Link></p>
      </Container>
    </Jumbotron>
  </div>
);

export default NotFound;