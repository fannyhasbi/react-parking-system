import React from 'react';
import Swal from 'sweetalert2';
import axios from 'axios';

import PARKIR_APP from '../../config/constants';

class MonthlyData extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }

  componentDidMount(){
    axios.get(PARKIR_APP.url + '/api/data-parkir', {
      params: {
        id_officer: 1
      }
    })
    .then((response) => {
      if(response.data.status === 200){
        this.setState({
          data: response.data.data
        });
      }
    })
    .catch((error) => {
      Swal("Oops", "Terjadi kesalahan", "warning");
      console.log(error);
    })
  }

  render(){
    return (
      <div>
        <h1>Data Parkir Bulanan</h1>

        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>Bulan</th>
              <th>Jumlah</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((el, i) =>
              <tr key={i}>
                <td>{el.waktu}</td>
                <td>{el.jumlah}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonthlyData;