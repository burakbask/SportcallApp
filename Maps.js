import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions } from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';

const mapIcon = require('./assets/map-icon.png');
const messagesIcon = require('./assets/messages-icon.png');
const friendsIcon = require('./assets/friends-icon.png');
const settingsIcon = require('./assets/settings-icon.png');
const basketballIcon = require('./assets/basketball-icon.png');

export default function Maps() {
  const [markers, setMarkers] = useState([]);
  const navigation = useNavigation();

  const handlePress = (e) => {
    const coordinate = e.nativeEvent.coordinate;
    const newMarker = {
      coordinate: coordinate,
      title: "Basketball Activity burakın evde??",
      description: "Erenin valide ve eyup basketball maçı!",
    };
    setMarkers([...markers, newMarker]);
  }

  return (
    <View style={styles.container}>
      <MapView style={styles.map} provider={PROVIDER_GOOGLE} onPress={handlePress}>
        {markers.map((marker, index) => (
          <Marker
            key={index}
            coordinate={marker.coordinate}
            title={marker.title}
            description={marker.description}
          >
            <Image source={basketballIcon} style={styles.markerIcon} />
          </Marker>
        ))}
      </MapView>
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
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ProfileSettings')}>
          <Image source={settingsIcon} style={styles.bottomButtonIcon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const screenHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
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
    backgroundColor: '#fff',
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
    color: '#222',
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
