import React, { Component } from 'react';
import UserForm from './UserForm';
import ReactDOM from 'react-dom';


const toolbarStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '600px',
  backgroundColor: '#d6e2ea',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid blue',
  padding: '8px 6px'
};

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div style={toolbarStyle}>
        <button onClick={this.onClick}>Create</button>
        <div style={{ flex: 1 }} />
        <button>List</button>
        <div style={{ flex: 1 }} />
        <button>Update</button>
        <div style={{ flex: 1 }} />
        <button>Delete</button>
      </div>
    );
  }
  onClick() {
    return (
      ReactDOM.render(<div>
        <UserForm />
      </div>,
        document.getElementById("pop")
      )
    );
  }
}

export default Toolbar;