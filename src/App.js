import React, { Component } from 'react'
import Beer from './Beer/Beer'

class App extends Component {

  state = {
    beer: [
      { id: 1,  name: "Heineken", tagline: "1", image_url: "https://images.rappi.com.br/products/2089953537-1531614559.png", description: "Cerveja heineken" },
      { id: 2, name: "Therezópolis", tagline: "2", image_url: "https://static.cestasmichelli.com.br/images/product/27736gg.jpg", description: "Cerveja therezópolis" },
      { id: 3, name: "Blue Moon", tagline: "23", image_url: "https://www.worldofbeers.com.br/1419-large_default/cerveja-americana-blue-moon-355ml.jpg", description: "Cerveja blue moon" }
    ],
    anotherSatate : 'Eu sou uma outro estado',
    isShowBeer : true
  }

  handleShowBeer = () => {
    this.setState({
      isShowBeer : !this.state.isShowBeer
    })
  }

  render() {
    return (
      <>
        <h1>Detalhamento das cervejas: </h1>
        <button onClick={this.handleShowBeer}>
          Mostra esconde cervejas
        </button>
        { this.state.isShowBeer && <Beer beer={this.state.beer} /> }
      </>
    )
  }
}

export default App