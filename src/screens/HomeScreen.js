import React from 'react';
import { Button, View } from 'react-native';
import { Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>App</Text>
      <Button
        onPress={() => {console.log("Button pressed")}}
        Title='Go to Component Demo'
      />
    </View>
  );
};

export default HomeScreen;
