import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
  },
});

const ComponentsScreen = () => {
  const greeting = 'Hello, World!'
  const SecondLine = <Text>Hello, Cheer!</Text>

  return (
    <View>
      <Text style={styles.textStyle}>This is the components screen</Text>
      <Text>{greeting}</Text>
      {SecondLine}
    </View>
  );
};

export default ComponentsScreen;
