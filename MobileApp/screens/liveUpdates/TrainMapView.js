import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import MapView from "react-native-maps";
const TrainMapView = () => {
  const [mapRegion, setmapRegion] = useState({
    latitude: 6.933925379595836,
    longitude: 79.84982254107602,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });
  return (
    <View style={styles.container}>
      <MapView
        style={{ alignSelf: "stretch", height: "100%" }}
        region={mapRegion}
      />
    </View>
  );
};
export default TrainMapView;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
