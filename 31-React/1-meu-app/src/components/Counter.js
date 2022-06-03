import React from "react";

class Counter extends React.Component {


    constructor(props) {
        super(props);
        //this.state = { count: 0 }

        // valido apenas no método construtor
        // dizer que o this.state recebe alguma coisa
        // em qualquer outro lugar, precisa utilizar
        // o this.setState
        // transformar uma propriedade em um estado
        // para passar o valor iniciar por propriedade
        this.state = { count: this.props.count }

        // fazendo o bind do this, para conseguir
        // passar de pai para filho
        // aqui dentro desse componente
        this.add = this.add.bind(this)
    }

    // alterar o estado, precisa utilizar
    // setState
    add() {
        // apesar de funcionar, pode dar erro
        // se aperta o botão muito rápido.
        //this.setState({ count: this.state.count + 1})

        // correto é:
        this.setState((state)=>{return{count:state.count + 1}})
    }

    render() {
        return (<div>
            <h1>Counter: {this.state.count}</h1>
            <button onClick={this.add} >Add</button>
        </div>)
    }
}

export default Counter;