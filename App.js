import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>TOPS 10 FILMES QUE INDICO!</Text>
<View style={styles.containerContent}>
<Image source={require('./Foto/Imagem01.jpg')} style={styles.imagens} />
        <Image source={require('./Foto/Imagem02.jpg')} style={styles.imagens} />
        <Image source={require('./Foto/Imagem03.jpg')} style={styles.imagens} />
        <Image source={require('./Foto/Imagem04.jpg')} style={styles.imagens} />
        <Image source={require('./Foto/Imagem05.jpg')} style={styles.imagens} />

</View>

<View style={styles.containerContent}>
<Image source={require('./Foto/Imagem06.jpg')} style={styles.imagens} />
        <Image source={require('./Foto/Imagem07.jpg')} style={styles.imagens} />
        <Image source={require('./Foto/Imagem08.jpg')} style={styles.imagens} />
        <Image source={require('./Foto/Imagem09.jpg')} style={styles.imagens} />
        <Image source={require('./Foto/Imagem10.jpg')} style={styles.imagens} />
</View>
        
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#808080'
  },

  containerContent:{
    flexDirection:"row"
  },

  imagens: {
    width: 300,
    height: 500,
    border: '3px solid black',
    borderRadius: 15,
    margin: 20
  },

  contentContainer: {
    flex: 1,
    justifyContent: 'space-around',
    flexDirection: 'row'
  },

  titulo: {
    color: '#0000FF',
    fontSize: 40,
    textAlign: 'center',
    fontWeight: '900'
  }
});