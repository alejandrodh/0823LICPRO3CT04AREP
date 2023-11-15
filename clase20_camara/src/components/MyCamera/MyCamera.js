import React, {Component} from 'react';
import {Camera} from 'expo-camera';
import {db, storage} from '../../firebase/config';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';

class MyCamera extends Component{
    constructor(props){
        super(props),
        this.state = {
            permisosDeHardware: false,
            urlInternaFoto: '',
            mostrarLaCamara: true, //Para elegir si queremos mostrar cámara o preview de foto.
        }
        
        this.metedosDeCamara = '' //Guardar los métodos internos de la cámara.

    }

    componentDidMount(){
        Camera.requestCameraPermissionsAsync()
            .then( ()=>{
                this.setState({
                    permisosDeHardware: true,
                })
            })
            .catch( e => console.log(e))
    }

    sacarFoto(){
        console.log("Sacando la foto...");

        this.metedosDeCamara.takePictureAsync()
            .then( photo => {
                this.setState({
                    urlInternaFoto: photo.uri, //url interna de la foto.
                    mostrarLaCamara: false,
                })
            })
            .catch( e => console.log(e))

    }

    cancelar(){
        console.log("Cancelando...");
        this.setState({
            urlInternaFoto: '',
            mostrarLaCamara: true,
        })
    }

    guardarLaFotoEnStorage(){
        fetch(this.state.urlInternaFoto)
            .then( res => res.blob())
            .then( image => {
                const ruta = storage.ref(`photos/${Date.now()}.jpg`); //storage retorna un Objeto Literal
                ruta.put( image )
                    .then( () => {
                        ruta.getDownloadURL() //la url de guardado en internet de la foto.
                            .then( url => { //url en internet

                                //Pasarle la info de la url al formulario de Posteo.
                                this.props.trearUrlDelaFoto(url);
                                this.setState({
                                    urlInternaFoto: ''
                                })
                            })
                    })


            })
            .catch(e=>console.log(e))

    }


    render(){
        //El return tiene que mostrar la cámara o el preview de la foto con las opciones de cancelar o confirmar.
        return(
            <View style={ styles.container}>

                {
                    this.state.permisosDeHardware === true ?
                        this.state.mostrarLaCamara === false ?
                        <React.Fragment>
                            <Image 
                                source={{uri:this.state.urlInternaFoto}}
                                style={ styles.cameraBody}
                            />
                            <View style={styles.confirm}>
                                <TouchableOpacity style={styles.cancelButton} onPress={()=>this.cancelar()}>
                                    <Text style={styles.textButton}>Cancelar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.confirmButton} onPress={()=>this.guardarLaFotoEnStorage()}>
                                    <Text style={styles.textButton}>Aceptar</Text>
                                </TouchableOpacity>
                            </View>
                        </React.Fragment>

                        :
                        <React.Fragment>
                            <Camera
                                style = { styles.cameraBody }
                                type={ Camera.Constants.Type.front}
                                ref={ metedosDeCamara => this.metedosDeCamara = metedosDeCamara}
                            />
                            <TouchableOpacity style = { styles.button } onPress={()=>this.sacarFoto()}>
                                <Text style = { styles.textButton }>Sacar Foto</Text>
                            </TouchableOpacity> 
                        </React.Fragment>
                        :
                        <Text>La cámara no tiene permisos para ser usada</Text>
                }



            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        height:"45vh",
        marginBottom: 20,
        marginHorizontal:5,
        padding: 10,
        
    },
    cameraBody: {
      marginTop: 20,
      marginBottom: 10,
      height:"40vh",
    },
    button:{
        backgroundColor:'#28a745',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius:4, 
        borderWidth:1,
        borderStyle: 'solid',
        borderColor: '#28a745'
    },
    textButton:{
        color: '#fff',
        textAlign: "center"
    },
    confirm:{
        flexDirection:"row",
        justifyContent: "space-between"
    },
    confirmButton:{
        backgroundColor:'#28a745',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius:4, 
    },
    cancelButton:{
        backgroundColor:'#dc3545',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius:4, 
    }
})

export default MyCamera