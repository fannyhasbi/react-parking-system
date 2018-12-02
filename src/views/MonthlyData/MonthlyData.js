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
  Alert
} from 'reactstrap';
import { PanelHeader } from '../../components';

import PARKIR_APP from '../../config/constants';

class MonthlyData extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      monthly_data: []
    }
  }

  componentDidMount(){
    axios.get(PARKIR_APP.url + '/api/data-parkir', {
      params: {
        id_officer: sessionStorage.getItem("id_officer")
      }
    })
    .then((response) => {
      if(response.data.status === 200){
        this.setState({
          monthly_data: response.data.data
        });
      }
    })
    .catch((error) => {
      Swal("Oops", "Terjadi kesalahan", "warning");
      console.log(error);
    })
  }

  render(){
    const content = this.state.monthly_data.length === 0 ?
      (
        <Alert color="warning">Tidak ada data parkir bulan apapun.</Alert>
      ) :
      (
        <Table>
          <thead className="text-primary">
            <tr>
              <th>Bulan</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {this.state.monthly_data.map((el, i) =>
              <tr key={i}>
                <td>{el.waktu}</td>
                <td>{el.jumlah}</td>
              </tr>
            )}
          </tbody>
        </Table>
      )
    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Laporan Bulanan</CardTitle>
                </CardHeader>
                <CardBody>
                  { content }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default MonthlyData;