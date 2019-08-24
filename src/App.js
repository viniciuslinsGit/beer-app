import React, { Component } from 'react'
import Beer from './Beer/Beer'

class App extends Component {

  state = {
    beer: [
      { id: 1,  name: "Maria Joana", tagline: "23", image_url: "23", description: "23" },
      { id: 2, name: "Mary Jane", tagline: "23", image_url: "23", description: "23" },
      { id: 3, name: "Peter Park", tagline: "23", image_url: "23", description: "23" }
    ],
    anotherSatate : 'Eu sou uma outro estado',
    isShowBeer : true
  }
  
  handleChangeName = event => {
    this.setState({
      beer: [
        { id: 4, name: "Samaurai Jack", tagline: "23", image_url: "23", description: "23" },
        { id: 5, name: "Pinto do Acordeon", tagline: "23", image_url: "23", description: "23" },
        { id: 6, name: "Professor Xavier", tagline: "23", image_url: "23", description: "23" }
      ]
    })
  }

  handleShowBeer = () => {
    this.setState({
      isShowBeer : !this.state.isShowBeer
    })
  }

  render() {
    return (
      <>
        <h1>Olá eu sou um componente </h1>
        <button onClick={this.handleShowBeer}>
          Mostra esconde estudante
        </button>
        { this.state.isShowBeer && <Beer beer={this.state.beer} /> }
        
          <button type="submit" onClick={this.handleChangeName} >
            Atualizar
          </button>
        
      </>
    )
  }
}

export default App