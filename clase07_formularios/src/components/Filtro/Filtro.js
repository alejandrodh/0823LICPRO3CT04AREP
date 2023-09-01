import React, { Component } from 'react';

class Filtro extends Component{

    constructor(props){
        super(props);
        this.state ={
            textoDelInput: ''
        }
    }

    controlarEnvio(evento){
        evento.preventDefault();
        console.log("No me mandé");
        return true
    }

    guardarDatosDelInput(eventoEnElInput){
        this.setState({
            textoDelInput: eventoEnElInput.target.value
        }, () => this.props.filtrar(this.state.textoDelInput))

       // console.log(this.state.textoDelInput);

        return true
    }

    render(){
        // console.log(this.props);
        return(
            <form action="" method='GET' onSubmit={(e) => this.controlarEnvio(e)}>
                <label htmlFor="">Texto a filtrar: </label>
                <input type="text" name='filtro' onChange={(e)=>this.guardarDatosDelInput(e)} value={this.state.textoDelInput} />
                <button type='submit'>Filtrar</button>
            </form>
        )
    }

}

export default Filtro