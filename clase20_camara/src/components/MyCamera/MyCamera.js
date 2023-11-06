import React, {Component} from 'react';
import {Camera} from 'expo-camera';
import {db, storage} from '../../firebase/config';
import { TouchableOpacity, View, Text } from 'react-native';

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

    }

    guardarLaFotoEnStorage(){

    }


    render(){
        //El return tiene que mostrar la cámara o el preview de la foto con las opciones de cancelar o confirmar.
        return(
            <View>
                <Camera
                    //style={}
                    type={ Camera.Constants.Type.front}
                    ref={ metedosDeCamara => this.metedosDeCamara = metedosDeCamara}
                />
                <TouchableOpacity onPress={()=>this.sacarFoto()}>
                    <Text>Sacar Foto</Text>
                </TouchableOpacity>
            </View>
        )
    }

}

export default MyCamera