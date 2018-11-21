import React from 'react';
import swal from 'sweetalert';
import axios from 'axios';

import PARKIR_APP from '../config/constants';

class Parkir extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get(PARKIR_APP.url + '/api/realtime')
    .then((response) => {
      if(response.data.status === 200){
        this.setState({
          data: response.data.data
        });
      }
    })
    .catch((error) => {
      swal("Oops", "Terjadi kesalahan", "warning");
      console.log(error);
    });
  }

  render(){
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
            {this.state.data.map((el, i) =>
              <tr key={el.id}>
                <td>{i}</td>
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