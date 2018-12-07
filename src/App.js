import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import PhoneForm from './PhoneForm';
import PhoneInfoList from './PhoneInfoList';

class App extends Component {
  id = 2
  state = {
    information : [
      { 
        id:0,
        name:'han',
        phone: '010-000-0000'
      },
      { 
        id:1,
        name:'yongwoo',
        phone: '010-000-0001'
      }
    ]
  }

  handleCreate = (data) => {
    const {information} = this.state;
    this.setState({
      information : information.concat({id: this.id++, ...data})
    })
  };

  handleRemove = (id) => {
    const {information} = this.state;
    this.setState({
      information : information.filter(info => info.id !== id)
    })
  };

  render() {
    const {information} = this.state;
    return (
      <div>
        <PhoneForm onCreate={this.handleCreate}/>
        <PhoneInfoList data={this.state.information}/>
      </div>
    );
  }
}

export default App;
