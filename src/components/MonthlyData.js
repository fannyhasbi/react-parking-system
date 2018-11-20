import React from 'react';

class MonthlyData extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
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
            <tr>
              <td>Agustus</td>
              <td>12</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default MonthlyData;