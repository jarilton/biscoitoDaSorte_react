import React, { Component } from 'react';

import './Styles.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      textoFrase: ''
    }

    this.quebraBiscoito = this.quebraBiscoito.bind(this)

    this.frases = [
      'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
      'Imagine uma nova história para sua vida e acredite nela.',
      'A amizade desenvolve a felicidade e reduz o sofrimento, duplicando a nossa alegria e dividindo a nossa dor.',
      'Ser feliz sem motivo é a mais autêntica forma de felicidade.',
      'Não existe um caminho para a felicidade. A felicidade é o caminho.',
      'Não espere por uma crise para descobrir o que é importante em sua vida.',
      'Saber encontrar a alegria na alegria dos outros, é o segredo da felicidade',
      'A alegria de fazer o bem é a única felicidade verdadeira.',
      'Pessimismo leva à fraqueza, otimismo ao poder.'
    ]
  }

  quebraBiscoito() {
    let state = this.state
    let numeroAleatorio =   Math.floor(Math.random() * this.frases.length)
    state.textoFrase = '" ' + this.frases[numeroAleatorio] + ' "'
    this.setState(state)
  }


  render() {
    return (
      <div className="container">
  
        <h1 className="titulo">Bem vindo ao biscoito da sorte! </h1>
  
        <img src={require('./assets/biscoito.png')} className="img" />
        <Botao nome="Abrir Biscoito" acaoBtn={this.quebraBiscoito}/>
        <h3 className="textoFrase">{this.state.textoFrase}</h3>
  
      </div>
    )
  }
}

class Botao extends Component {
    render() {
      return(
        <div>
          <button onClick={this.props.acaoBtn} >{this.props.nome}</button>
        </div>
      )
    }
}

export default App;
