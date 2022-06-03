import React from 'react';
import Menu from '../components/Menu';


// Trabalhando com função, jeito mais utilizado
// hoje em dia

// function Header(props) {

//     return (
//         <header className='header'>
//             <h1>{props.name}</h1>
//             <Menu links2={props.links1} />

//         </header>

//     )
// }

// um construtor, se não, ele usa o construtor
// da herança do Component
 
// propriedade = uma vez definida, não altera, e vem do pai para o filho
// se quer alterar uma propriedade, usa o estado
// Classes ainda são um modo de trabalhar com estado, para alterar
// comportamento de uma propriedade
// exemplo de classe em React

class Header extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return (
            <header className='header'>
                {/* esse this, faz referência 
                // à props que foi passada como parâmetro */}
                <h1>{this.props.name}</h1>
                <Menu links2={this.props.links1} />

            </header>);

    }
}

export default Header;