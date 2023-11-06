import react, { Component } from 'react';
import {TextInput, TouchableOpacity, View, Text, StyleSheet, FlatList} from 'react-native';
import { db, auth } from '../../firebase/config';
import PostForm from '../PostForm/PostForm';
import Post from '../../components/Post/Post';

class Home extends Component {
    constructor(){
        super()
        this.state={
            posts:[]
        }
    }

    componentDidMount(){
        //Traer los datos de Firebase y cargarlos en el estado.
        db.collection('posts').onSnapshot(
            listaPosts => {
                let postsAMostrar = [];

                listaPosts.forEach(unPost => {
                    postsAMostrar.push({
                        id:unPost.id,
                        datos: unPost.data()            
                    })
                })

                this.setState({
                    posts:postsAMostrar
                })
            }
        )

    }


    logout(){
        auth.signOut();
         //Redirigir al usuario a la home del sitio.
        // this.props.navigation.navigate('Login')
    }

    render(){
        console.log(this.state);
        return(
            <View>
                <Text>HOME</Text>
                <TouchableOpacity onPress={()=>this.logout()}>
                    <Text>Logout</Text>
                </TouchableOpacity>
               
                <Text>Crear nuevo post</Text>
                <PostForm />

                <Text>Lista de posteos creados</Text>
                
                <FlatList
                    data={this.state.posts}
                    keyExtractor={ unPost => unPost.id }
                    renderItem={ ({item}) => <Post dataPost = {item} />  }
                />

            </View>
        )
    }
}



export default Home;
