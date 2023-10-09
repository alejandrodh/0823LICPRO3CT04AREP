import { StyleSheet, Text, View, Image, FlatList } from 'react-native';

export default function App() {
  let nombres = ['Ale', 'Timo', 'Gastón', 'Bauti', 'Santi', 'DataAnalyst']


  return (
    <View style={styles.container}>
      <Text>Hola Mundo</Text>
      <Text>Hulk</Text>
      <Image
        style={styles.image}
        source={require('./assets/img/hulkSmall.jpg')}
        resizeMode='contain'
      />
      <Text>Foto del Ole</Text>
      <Image
        style={styles.image}
        source={{uri:'https://www.ole.com.ar/images/2023/10/03/rT-ZRuVCl_1200x630__1.jpg'}}
        resizeMode='cover'
      />
      <FlatList 
        data={ nombres }
        keyExtractor={unNombre => unNombre.toString()}
        renderItem={({item}) => <Text>{item}</Text>}
      />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height:300,
    width: 300
  }
});
