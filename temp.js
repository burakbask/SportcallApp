import { StyleSheet, Text, View, Button } from 'react-native';
// View, text, button, textinput, image...
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{ margin: 16, borderWidth: 2, padding: 20 }}>
        asdasd
      </Text>
      <Button title='Hit mee' />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  container2: {
    flex: 1,
    backgroundColor: '#222',
    alignItems: '',
    justifyContent: '',
  }
});


