import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, ImageBackground, Text, Image, TextInput, TouchableOpacity, View, Dimensions } from 'react-native';

const sportcallIcon = require('./assets/sportcall-icon.png');
const backgroundIcon = require('./assets/background-icon.jpg')

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const handleLogin = () => {
    // Your login logic here
  };

  return (
    
    <View style={styles.container}>
      <ImageBackground source={backgroundIcon} style={styles.background}>
      <Image source={sportcallIcon} style={styles.sportcall} />
      
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={setEmail}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={setPassword}
        value={password}
        secureTextEntry={true}
      />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Maps')}>
        <Text style={styles.buttonText}>SIGN IN</Text>
      </TouchableOpacity>
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Sign Up</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Text style={styles.bottomButtonText}>Contact Us</Text>
        </TouchableOpacity>
      </View>
      </ImageBackground>
    </View>
    
  );
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1a1a1a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#fff',
  },
  sportcall: {
    marginBottom:120,
    height: 70,
    width: 400,
    resizeMode: 'contain',
  },
  background: {
    flex:1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 1,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginBottom: 20,
    marginLeft: 40,
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 10,
    borderRadius: 5,
    width: '80%',
    marginLeft: 40,
    marginTop: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 20,
  },
  bottomButton: {
    paddingHorizontal: 20,
  },
  bottomButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  circleButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 50,
    width: 70,
    height: 70,
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleButtonText: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
