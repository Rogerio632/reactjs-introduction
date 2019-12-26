import React, { Component } from 'react';
import TechItem from './TechItem';

class TechList extends Component{
  state = {
    newTech: '',
    techs: [],
  };

  //Executado assim que o componente aparece em tela
  componentDidMount(){
    
    const techs =  localStorage.getItem('technologys');

    if(techs){
      this.setState({ techs: JSON.parse(techs) });
    }
  }
  
  //Executado sempre que houver alterações no props ou state
  componentDidUpdate(prevProps, prevState){
    if(prevState.techs !== this.state.techs ) {
      localStorage.setItem('technologys', JSON.stringify(this.state.techs));
    }
  }

  //Executado quando o componente deixa de existir
  /*componentWillUnmount(){

  }*/
  

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
        <TechItem />
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