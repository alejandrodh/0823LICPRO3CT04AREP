
function TarjetaPersonaje (props){
    // console.log(props);

    return (
            <article className='character-card'>
                <img src={props.datosPersonaje.image} alt={props.datosPersonaje.name} />
                <h2>{props.datosPersonaje.name}</h2> {/* Nombre */}
                <p>{props.datosPersonaje.status}</p> {/* Estado */}
                <p>{props.datosPersonaje.species}</p> {/* Especie */}
            </article>
    )

}

export default TarjetaPersonaje;