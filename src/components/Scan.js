import React from 'react';
import QrReader from 'react-qr-reader';
import swal from 'sweetalert';

class ScanPage extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      delay: 1500,
      result: "No Result",
      isOpen: false
    }
    this.handleScan = this.handleScan.bind(this);
  }

  handleScan(data){
    if(data){
      swal("Success", "Berhasil discan", "success");
      
      this.setState({
        result: data
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
        <p>{this.state.result}</p>
      </div>
    )
  }
}

export default ScanPage;