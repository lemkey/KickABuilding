
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, {useState} from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 
 import NavBar from './components/Navbar';
 import MapboxGL from '@react-native-mapbox-gl/maps';

 MapboxGL.accessToken = 'pk.eyJ1IjoibGVta2V5IiwiYSI6ImNrbWFzZ2VqYTE1dG4ydnFmaGFoeHIwNm0ifQ.CX9QBAGCiqM-mqmqe3wJHg'
 
 const App = () => {
   const [coordinates, setCoordinates] = useState(null);
   const [selectedPoint, setSelectedPoint] = useState(null);
 
   const onSelectPoint = event => {
     setCoordinates(event.geometry.coordinates);
     setSelectedPoint(event.properties.id);
   };
   let styleURL = URL('https://api.mapbox.com/styles/v1/lemkey/ckqg0ekb32lnj17qt1hns3f7o.html?fresh=true&title=copy&access_token=pk.eyJ1IjoibGVta2V5IiwiYSI6ImNrbWFzZ2VqYTE1dG4ydnFmaGFoeHIwNm0ifQ.CX9QBAGCiqM-mqmqe3wJHg')
   return (
     <>
     <NavBar />
       <SafeAreaView>
         <View style={styles.container}>
         <MapboxGL.MapView
            style={styles.map}
            onPress={event => {
              setCoordinates(event.geometry.coordinates);
              setSelectedPoint(null);
            }}>
            <MapboxGL.Camera
              zoomLevel={8}
              centerCoordinate={[-94.5786, 39.0997]}
            />
             <MapboxGL.PointAnnotation
               id="Kansas City"
               coordinate={[-94.624443, 39.102489]}
               onSelected={onSelectPoint}
             />
           </MapboxGL.MapView>
           {coordinates ? (
             <View style={styles.coordinateViewContainer}>
               <View style={styles.coordinateView}>
                 <Text>
                   {coordinates[0]}, {coordinates[1]}
                 </Text>
               </View>
             </View>
           ) : null}
         </View>
       </SafeAreaView>
     </>
   );
 };
 
 const styles = StyleSheet.create({
   container: {
     height: '100%',
     width: '100%',
   },
   map: {
     flex: 1,
   },
   coordinateViewContainer: {
     position: 'absolute',
     bottom: 0,
     padding: 5,
     width: '100%',
     backgroundColor: 'transparent',
   },
   coordinateView: {
     padding: 5,
     backgroundColor: '#fff',
     flex: 1,
   },
 });
 
 export default App;



