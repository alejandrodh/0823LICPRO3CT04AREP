import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { auth } from "./src/firebase/config";
import Register from './src/screens/Register/Register';

export default function App() {


  return (
    <View style={styles.container}>
      <Text>Hasta que no veamos navegación vamos a invocar dentro de app.js a las pantalas de Login y de Registro.</Text>
      <Register />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
