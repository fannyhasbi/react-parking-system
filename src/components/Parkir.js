import React from 'react';

class Parkir extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: [
        {
          id: 1,
          tanggal: "2018-07-01 08:00:00",
          merk: "Honda",
          type: "Supra X 125"
        },
        {
          id: 2,
          tanggal: "2018-07-01 08:01:00",
          merk: "Honda",
          type: "Vario 150"
        }
      ]
    }
  }

  render(){
    return (
      <div>
        <h1>Ini data Parkir</h1>
        
        <table className="table table-hover table-striped">
          <thead>
            <tr>
              <th>ID</th>
              <th>Tanggal</th>
              <th>Merk</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {this.state.data.map((el, i) => 
              <tr key={i}>
                  <td>{el.id}</td>
                  <td>{el.tanggal}</td>
                  <td>{el.merk}</td>
                  <td>{el.type}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Parkir;