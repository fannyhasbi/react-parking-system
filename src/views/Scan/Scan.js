import React from 'react';
import QrReader from 'react-qr-reader';
import qs from 'qs';
import Swal from 'sweetalert2';
import axios from 'axios';

import {
  Card,
  CardBody,
  CardHeader,
  CardTitle,
  Row,
  Col,
  Button
} from 'reactstrap';
import { PanelHeader } from '../../components';

import PARKIR_APP from '../../config/constants';

class Scan extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      delay: 1500,
      data: "",
      isOpen: false
    }
    
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data){
    if(data){
      const postData = qs.stringify({
        kode_qr: data,
        id_officer: 1
      });

      axios.post(PARKIR_APP.url + '/api/scan',
        postData,
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }
      )
      .then((response) => {
        console.log(response);
        if(response.data.status === 200){
          Swal("Berhasil", "Kendaraan berhasil di-scan", "success");
        }
        else if(response.data.status === 404){
          Swal("Oops", "Kode QR tidak dikenali", "warning");
        }
        else {
          Swal("Oops", "Terjadi kesalahan", "warning");
        }
      })
      .catch((error) => {
        Swal("Oops", "Terjadi kesalahan", "warning");
        console.log('error', error);
      });
      
      this.setState({
        data: data
      });
    }
  }

  render(){
    let btn = <div></div>;

    if(this.state.isOpen){
      btn = <Button color="info" onClick={() => this.setState({ isOpen: false })}>Tutup Scan</Button>
    }
    else {
      btn = <Button color="success" onClick={() => this.setState({ isOpen: true })}>Mulai Scan</Button>
    }

    return (
      <div>
        <PanelHeader size="sm" />
        <div className="content">
          <Row>
            <Col xs={12}>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Scan Kendaraan</CardTitle>
                </CardHeader>
                <CardBody>
                  <p>{'Data : ' + this.state.data}</p>
                  
                  { btn }
                  
                  {
                    this.state.isOpen && 
                    <QrReader
                      delay={this.state.delay}
                      onError={(err) => console.log(err)}
                      onScan={this.handleScan}
                      style={{ width: "100%" }}
                    />
                  }
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}

export default Scan;