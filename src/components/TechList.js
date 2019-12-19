import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component{
  state = {
    newTech: '',
    techs: [
      'Node.js',
      'ReactJS',
      'React Native'
    ]
  };

  handleInputChange = e => {
    this.setState({ newTech: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({ techs: [...this.state.techs, this.state.newTech],
      newTech: '',
    }); 
  };

  handleDelete = tech => {
    this.setState({ techs: this.state.techs.filter(tec => tec !== tech) });
  };

  render(){
    return (
      <form onSubmit={this.handleSubmit}>

    <h3>{this.state.newTech}</h3>

      <ul>
      { this.state.techs.map(tech =>
        <TechItem key={tech} tech={tech} onDelete={() => this.handleDelete(tech)} /> ) }
      </ul>

      <input
       type="text"
        onChange={this.handleInputChange}
         value={this.state.newTech} />

         <button type="submit">Enviar</button>
      </form>
    );
  }
}
export default TechList;