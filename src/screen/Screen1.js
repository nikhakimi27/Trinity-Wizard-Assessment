import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList} from "react-native";
import data from '../data.json';

const Item = ({ item, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
    <Text style={[styles.title, textColor]}>{item.title}</Text>
  </TouchableOpacity>
);

const fetchData = () => {
};

function Screen1({route, navigation}) {

  const renderItem = ({ item }) => {
    return (
      <Text>
        {item.firstName} {item.lastName}
      </Text>
    );
  };


  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)'
      },
      header_container: {
        width: '100%',
        height: 80,
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 20
      },
      titleText: {
        fontSize: 20,
        fontWeight: 'bold'
      }
});

export default Screen1;
