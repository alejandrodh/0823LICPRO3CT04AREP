import react, { Component } from 'react';
import {db, auth } from '../../firebase/config';
import MyCamera from '../../components/MyCamera/MyCamera';
import {TextInput, TouchableOpacity, View, Text, StyleSheet} from 'react-native';

class PostForm extends Component {
    constructor(){
        super()
        this.state={
           textoPost:'',
        }
    }

    //1)Completar la creación de posts
    crearPost(owner, textoPost, createdAt){
        //Crear la colección Users
        db.collection('posts').add({
            owner: owner, //auth.currentUser.email,
            textoPost: textoPost, //this.state.textoPost,
            createdAt: createdAt //Date.now(), 
        })
        .then( res => console.log(res))
        .catch( e => console.log(e))
    }


    render(){
        return(
            <View style={styles.formContainer}>
                <Text>Aca debajo está la cámara</Text>
                <MyCamera />
                <Text>New Post</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={(text)=>this.setState({textoPost: text})}
                    placeholder='Escribir...'
                    keyboardType='default'
                    value={this.state.textoPost}
                    />
                <TouchableOpacity style={styles.button} onPress={()=>this.crearPost(auth.currentUser.email, this.state.textoPost, Date.now())}>
                    <Text style={styles.textButton}>Postear</Text>    
                </TouchableOpacity>
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
        color: '#fff'
    }

})


export default PostForm;
