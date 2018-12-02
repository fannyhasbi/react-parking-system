import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Table,
  Row,
  Col,
} from 'reactstrap';

import { PanelHeader } from '../../components';

import PARKIR_APP from '../../config/constants';

class Parkir extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      realtime_data: []
    }
  }

  componentDidMount(){
    axios.get(PARKIR_APP.url + '/api/realtime')
    .then((response) => {
      if(response.data.status === 200){
        this.setState({
          realtime_data: response.data.data
        });
      }
    })
    .catch((error) => {
      Swal("Oops", "Terjadi kesalahan", "warning");
      console.log(error);
    });
  }

  render(){
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Data Parkir Realtime</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table>
                    <thead>
                      <tr>
                        <th>Tanggal</th>
                        <th>Merk</th>
                        <th>Tipe</th>
                        <th>Nama</th>
                      </tr>
                    </thead>
                    <tbody>
                      {
                        this.state.realtime_data.map((el, i) => 
                          <tr key={i}>
                            <td>{el.waktu.split(" ")[0]}</td>
                            <td>{el.merk}</td>
                            <td>{el.tipe}</td>
                            <td>{el.nama}</td>
                          </tr>
                        )
                      }
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }

  render_old(){
    return (
      <div>
        <h1>Ini data Parkir</h1>
        
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>No.</th>
              <th>Tanggal</th>
              <th>Merk</th>
              <th>Tipe</th>
              <th>Nama</th>
            </tr>
          </thead>
          <tbody>
            {this.state.realtime_data.map((el, i) =>
              <tr key={el.id}>
                <td>{i+1}</td>
                <td>{el.waktu.split(" ")[0]}</td>
                <td>{el.merk}</td>
                <td>{el.tipe}</td>
                <td>{el.nama}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Parkir;