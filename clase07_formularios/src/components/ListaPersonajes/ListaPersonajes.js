import React, { Component } from "react";
import Filtro from "../Filtro/Filtro";
import TarjetaPersonaje from "../TarjetaPersonaje/TarjetaPersonaje";


class ListaPersonajes extends Component{

    constructor(){
        super();
        this.state = {
           personajes : [],
        }
    }

    componentDidMount(){
        console.log("En componentDidMount");

        fetch("https://rickandmortyapi.com/api/character")
        .then(response => response.json())
        .then( data => this.setState({
            personajes: data.results,
        }))
        .catch(e => console.log(e))
    }

    filtrarPersonajes(textoAFiltrar){
    //  Desarrollar el método para que deje solo los personajes en donde el texto a filtrar esté incluido en el nombre.
        let personajesFiltrados = this.state.personajes.filter(function(unPersonaje){
            return unPersonaje.name.includes(textoAFiltrar) //includes retorna TRUE o FALSE
        })

        this.setState({
            personajes: personajesFiltrados,
        })

    }

    render(){
        console.log("Me monté");
        console.log(this.state)
        return(
            <section>
                <Filtro filtrar={(texto) => this.filtrarPersonajes(texto)} />
                { 
                   this.state.personajes.map(function(unPersonaje){
                    return <TarjetaPersonaje key={ unPersonaje.id } datosPersonaje={ unPersonaje }/>
                   })
                }
            </section>
        )
    }

}


export default ListaPersonajes;

