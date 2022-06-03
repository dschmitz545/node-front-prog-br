//import React from "react";
import React, { useEffect, useState } from 'react';

/*
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

    // alterar o estado, 
    // precisa utilizar setState
    add() {
        // apesar de funcionar, pode dar erro
        // se apertar o botão muito rápido.
        // this.setState({ count: this.state.count + 1})

        // correto é:
        this.setState((state) => { return { count: state.count + 1 } }, () => {
            console.log(this.state)
        })
    }

    /* shouldComponentUpdate(){
        return false;
    } */

/* componentDidMount(){

} */

/* componentWillUnmount(){

}

render() {
    return (<div>
        <h1>Counter: {this.state.count}</h1>
        <button onClick={this.add} >Add</button>
    </div>)
}
}

export default Counter;

*/


// iniciando o estado de componente usando hooks
function Counter(props) {
    // const [count, setCount] = useState(0)
    // ou ainda pode ser feito assim,
    // aproveitando a props passada por parametro
    const [count, setCount] = useState(props.count)

    // ele é chamado em duas ocasioes.
    // quando o componente for criado, equivalente ao ComponentDidMount()
    // e sempre que o componente for atualizado, equivalente ao ComponentDidUpdate()
    // e pode ser chamado várias vezes
    useEffect(() => {
        setCount(parseInt(localStorage.getItem("count")));
    }, [])

    useEffect(() => {
        document.title = count;
        localStorage.setItem("count", count);
    }, [count]);

    function add() {
        // quando quiser modificar o estado do componente
        // usa o segundo nome definido ai em cima
        // nesse caso, setCount
        setCount(count + 1)
    }
    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={add} >Add</button>
        </div>
    )
}
export default Counter;