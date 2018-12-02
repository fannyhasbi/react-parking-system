import React from 'react';
import QrReader from 'react-qr-reader';
import qs from 'qs';
import Swal from 'sweetalert2';
import axios from 'axios';

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
    var btn = <div></div>;

    if(this.state.isOpen){
      btn = <button className="btn btn-info" onClick={() => this.setState({ isOpen: false })}>Tutup Scan</button>
    }
    else {
      btn = <button className="btn btn-success" onClick={() => this.setState({ isOpen: true })}>Mulai Scan</button>
    }

    return (
      <div>
        <h1>Sistem Parkir</h1>
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
        <p>{this.state.data}</p>
      </div>
    )
  }
}

export default Scan;