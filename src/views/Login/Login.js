import React from 'react';
import axios from 'axios';
import qs from 'qs';
import Swal from 'sweetalert2';
import { Redirect } from 'react-router-dom';

import {
  Jumbotron,
  Container,
  Row,
  Col,
  FormGroup,
  Label,
  Input,
  Button } from 'reactstrap';

import PARKIR_APP from '../../config/constants';

class Login extends React.Component {
  constructor(props){
    super(props);
    
    this.state = {
      username: '',
      password: '',
      is_valid: false
    }

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    const { username, password } = this.state;
    
    if(username.length === 0 || password.length === 0){
      Swal({
        title: 'Harap isi username dan password dengan benar',
        type: 'warning',
        toast: true
      });
      return;
    }

    const login = 'Login'; // just an ordinary string

    const postData = qs.stringify({
      username,
      password,
      login
    });

    axios.post(PARKIR_APP.url + '/api/login',
      postData,
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        }
      }
    )
    .then((response) => {
      if(response.data.status === 200){
        this.saveSession(response.data.data);
        this.setState({ is_valid: true });
      }
      else {
        this.setState({ is_valid: false });
        Swal({
          text: 'Username atau password tidak terdaftar',
          type: 'error',
        });
      }
    })
    .catch((error) => {
      Swal({
        title: 'Oops',
        text: 'Maaf, sedang terjadi kesalahan',
        type: 'warning',
      });
      console.log('error', error);
    });
  }

  saveSession(officer_data){
    sessionStorage.setItem("id_officer", officer_data.id);
    sessionStorage.setItem("name", officer_data.nama);
    sessionStorage.setItem("username", officer_data.username);
    sessionStorage.setItem("parkiran", officer_data.parkiran);
    sessionStorage.setItem("jurusan", officer_data.jurusan);
    sessionStorage.setItem("fakultas", officer_data.fakultas);
  }

  render(){
    if(this.state.is_valid)
      return <Redirect to="/control/scan" />
    return (
      <div>
        <Jumbotron className="text-center alert alert-info" fluid>
          <h1>Masuk Sebagai Officer</h1>
        </Jumbotron>
        <Container fluid>
          <Row>
            <Col sm="12" md={{ size: 4, offset: 4 }}>
              <FormGroup>
                <Label>Username</Label>
                <Input type="text" name="username" id="username" autoFocus defaultValue={this.state.username} onChange={(e) => this.setState({ username: e.target.value })} />
              </FormGroup>
              <FormGroup>
                <Label>Password</Label>
                <Input type="password" name="password" id="password" defaultValue={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} />
              </FormGroup>
              <FormGroup>
                <Button color="primary" size="lg" block onClick={this.handleSubmit}>Masuk</Button>
              </FormGroup>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}

export default Login;