import React from 'react';
import Colors from 'react-native';
import {ProfileTabNavigator} from 'react-native-navbar'

const NavBar = () => {
  return (
      <ProfileTabNavigator.Navigator tabBarOptions={{
          activeTintColor: Colors.COLOR_WHITE,
          labelStyle: {
              textTransform: "uppercase",
          },
          inactiveTintColor: Colors.COLOR_SUPER_DARK_GREY,
          indicatorStyle: {
              height: null,
              top: '10%',
              bottom: '10%',
              width: '45%',
              left: '2.5%',
              borderRadius: 100,
              backgroundColor: Colors.PRIMARY_TWO,
          },
          style: {
              alignSelf: "center",
              width: '50%',
              borderRadius: 100,
              borderColor: "blue",
              backgroundColor: "white",
              elevation: 5, 
              shadowOpacity: .10,
              shadowRadius: 4, 
          },
          tabStyle: {
              borderRadius: 100,
          },
      }}
      swipeEnabled={true}>
        <h2>Kick A Building</h2>
   <ProfileTabNavigator.Screen name="Comments" />
 </ProfileTabNavigator.Navigator>
);
};

export default NavBar;