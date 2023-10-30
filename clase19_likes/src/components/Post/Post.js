import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class Post extends Component {

    constructor(props){
        super(props);

        this.state = {
            like: false
        }
    }

    componentDidMount(){
        //Chequear apenas carga si el post está o no likeado
        
    }

    //Necesitamos en FB que cada Post tenga una propiedad con un array de emails

    likear(){
        //Agrega un email en la propiedad like del post.
    }

    unlike(){
        //Quita un email en la propiedad like del post.
    }


    render(){
        return (
            <View>
                <Text>{ this.props.dataPost.datos.owner }</Text>
                <Text>{ this.props.dataPost.datos.textoPost }</Text>

                {
                    this.state.like ?
                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.textButton}>unLike</Text>    
                        </TouchableOpacity>

                        :

                        <TouchableOpacity style={styles.button} >
                            <Text style={styles.textButton}>Likear</Text>    
                        </TouchableOpacity>
                }
                

                



            </View>

        )
    }

}

const styles = StyleSheet.create({
    formContainer:{
        paddingHorizontal:10,
        marginTop: 20,
    },
    input:{
        height:20,
        paddingVertical:15,
        paddingHorizontal: 10,
        borderWidth:1,
        borderColor: '#ccc',
        borderStyle: 'solid',
        borderRadius: 6,
        marginVertical:10,
    },
    button:{
        backgroundColor:'orange',
        paddingHorizontal: 10,
        paddingVertical: 6,
        textAlign: 'center',
        borderRadius:4, 
        borderWidth:1,
        borderStyle: 'solid',
        borderColor: 'orange'
    },
    textButton:{
        color: '#fff'
    }
})

export default Post;