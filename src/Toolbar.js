import React, { Component } from 'react';
import UserForm from './UserForm';
import ReactDOM from 'react-dom';
import PersonDataTable from './PersonDataTable';


const toolbarStyle = {
  display: 'flex',
  flexDirection: 'row',
  width: '600px',
  backgroundColor: '#d6e2ea',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid blue',
  padding: '8px 6px',
  margin: '10px 0px 50px 10px'
};

class Toolbar extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  render() {
    return (
      <div style={toolbarStyle} >
        <button onClick={this.onClick} >Create</button>
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
      ReactDOM.render(<div style= {{display: "flex", flexDirection: "row"}}>
        <UserForm />
        <div style={{flex : 0.1}} />
        <div id="tab">
        <PersonDataTable entries={[]} />
        </div>
      </div>,
        document.getElementById("pop")
      )
    );
  }
}

export default Toolbar;