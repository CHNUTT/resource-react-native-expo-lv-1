import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

const ListScreen = () => {
  const friends = [
    { name: 'Friend #1', age: 10 },
    { name: 'Friend #2', age: 11 },
    { name: 'Friend #3', age: 12 },
    { name: 'Friend #4', age: 13 },
    { name: 'Friend #5', age: 14 },
    { name: 'Friend #6', age: 15 },
    { name: 'Friend #7', age: 16 },
    { name: 'Friend #8', age: 17 },
    { name: 'Friend #9', age: 18 },
  ];

  return (
    <FlatList
      // horizontal={true}
      // showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.textStyle} key={item.name}>
            {item.name} - Age {item.age}
          </Text>
        </View>
      )}
    />
  );
};

export default ListScreen;
