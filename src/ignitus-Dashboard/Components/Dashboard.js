import React from 'react';
import '../Styles/style.css';

class Dashboard extends React.Component{

  render(){
    return(
    <div>
        <div className ="container marginTop">
          <div className="alert alert-success">
            <strong>Success!</strong>
          </div>
        </div>
    </div>
    )
  }
}

export default Dashboard;
