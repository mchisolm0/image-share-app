import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { logo } from './assets/logo.png';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.instructions}>To share a photo from your phone with a friend, just press the button below!</Text>
      <StatusBar style="auto" />
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
  instructions: {
    color: '#888',
    fontSize: 18,
  },
  buttonText: {

  },
  button: {

  },
  logo: {
    width: 305,
    height: 159,
  },
});
