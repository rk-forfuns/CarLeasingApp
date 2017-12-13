import React, { Component } from 'react';
import { Alert, Table } from 'reactstrap';
import { connect } from 'react-redux';

class Messages extends Component {

  render(){
    console.log('messages on admin page: ', this.props.messages);
    let messagesList = this.props.messages ? this.props.messages.map(message => {
      return(
        <tr>
          <td>{message.uname}</td>
          <td>{message.uphone}</td>
          <td>{message.uemail}</td>
          <td>{message.umessage}</td>
          <td>{message.followup ? "Yes" : "No"}</td>
          <td>Delete</td>
        </tr>
      )
    }) : null;

    return(
      <div className="container">
        <br/>
        <div className="card border-primary mb-3">
        <div className="card-header text-white bg-primary">Messages</div>
          <div className="card-body text-primary">
            <Table hover>
              <thead className="text-success">
                <tr>
                  <th>NAME</th>
                  <th>PHONE</th>
                  <th>EMAIL</th>
                  <th>MESSAGE</th>
                  <th>FOLLOWUP</th>
                  <th>DELETE</th>
                </tr>
              </thead>
              <tbody>
                {messagesList}
              </tbody>
            </Table>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props){
  return{
    messages: state.messages
  }
}

export default connect(mapStateToProps, null)(Messages);