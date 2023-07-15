import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const styles = StyleSheet.create({
  primaryContent: {
    fontSize: 45,
  },
  secondaryContent: {
    fontSize: 20,
  },
});

const ComponentsScreen = () => {
  const myName = 'Cheer';
  return (
    <View>
      <Text style={styles.primaryContent}>Getting started with react native!</Text>
      <Text style={styles.secondaryContent}>My name is {myName}</Text>
    </View>
  );
};

export default ComponentsScreen;
