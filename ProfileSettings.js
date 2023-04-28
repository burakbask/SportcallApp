import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, Button, TextInput, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const mapIcon = require('./assets/map-icon.png');
const messagesIcon = require('./assets/messages-icon.png');
const friendsIcon = require('./assets/friends-icon.png');
const settingsIcon = require('./assets/settings-icon.png');
const basketballIcon = require('./assets/basketball-icon.png');

const ProfileSettings = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSave = () => {
    // handle save logic here
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Settings</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry={true}
      />
      <Button title="Save" onPress={handleSave} />
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.bottomButton}>
          <Image source={mapIcon} style={styles.bottomButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Image source={messagesIcon} style={styles.bottomButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.circleButton}>
          <Text style={styles.circleButtonText}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Image source={friendsIcon} style={styles.bottomButtonIcon} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.bottomButton}>
          <Image source={settingsIcon} style={styles.bottomButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'white',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    padding: 10,
    marginBottom: 10,
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  bottomButton: {
    paddingHorizontal: 20,
  },
  bottomButtonIcon: {
    width: 30,
    height: 30,
  },
  circleButton: {
    backgroundColor: 'grey',
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  circleButtonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markerIcon: {
    width: 40,
    height: 40,
  },
});

export default ProfileSettings;
