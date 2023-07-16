import React from 'react';
import { Button, View } from 'react-native';
import { Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

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
        onPress={() => {
          console.log('Button pressed');
        }}
        title='Go to Component Demo'
      />
      <TouchableOpacity onPress={() => console.log('List Pressed')}>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
        <Text>Go to List Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
