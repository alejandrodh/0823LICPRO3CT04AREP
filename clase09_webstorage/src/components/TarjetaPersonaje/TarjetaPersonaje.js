import React, {Component} from 'react';


class TarjetaPersonaje extends Component {
    constructor(props){
        super(props)
        this.state = {
            textoBoton: "Agregar a favoritos",
        }
    }

    componentDidMount(){
        //Chequear si el id está en el array de favoritos
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            let favoritos = JSON.parse(recuperoStorage);
    
            //si está el id, cambiar el texto del botón
            if(favoritos.includes(this.props.datosPersonaje.id)){
                this.setState({
                    textoBoton: "Quitar de favoritos"
                })
            }

        }
    }

    //Si el id está en el array debe sacarlo.
    //Si el id NO ESTÁ en el array debe agregarlo.
    
    agergarYSacarDeFavs(id){
        //Guardar un id en un array y luego en localStorage
        let favoritos = [];
        let recuperoStorage = localStorage.getItem('favoritos');

        if (recuperoStorage !== null){
            favoritos = JSON.parse(recuperoStorage);
        }

        if(favoritos.includes(id)){
            //Si el id está en el array. ¿Qué tenemos que hacer?
            //Sacarlo del array.
            favoritos = favoritos.filter( unId => unId !== id)

            //Mostrarle un cambio al usuario en la pantalla.
            this.setState({
                textoBoton : "Agregar a favoritos"
            })

        } else {
            //Si el id NO ESTÁ en el array. ¿Qué tenemos que hacer?
            favoritos.push(id);
    
            this.setState({
                textoBoton: "Quitar de favoritos",
            })

        }

        //Guardar en localStorage
        let favoritosToString = JSON.stringify(favoritos);        
        localStorage.setItem('favoritos', favoritosToString);

        console.log(localStorage);

    }



    render(){
        return (
            <article className='character-card'>
                <img src={this.props.datosPersonaje.image} alt={this.props.datosPersonaje.name} />
                <button onClick={()=>this.agergarYSacarDeFavs(this.props.datosPersonaje.id)} type='button'>{this.state.textoBoton}</button>
                <h2>{this.props.datosPersonaje.name}</h2> 
                <p>{this.props.datosPersonaje.status}</p> 
                <p>{this.props.datosPersonaje.species}</p>
            </article>
        )
    }
    
}

export default TarjetaPersonaje;