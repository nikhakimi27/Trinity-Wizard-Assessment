import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, FlatList} from "react-native";
import data from '../data.json';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const fetchData = () => {
};

function Screen1({route, navigation}) {

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        style = {{width: windowWidth, height: windowHeight / 10}}
        onPress={() => navigation.navigate('Screen2', {item})}>
        <Text>
        {item.firstName} {item.lastName}
      </Text>
      </TouchableOpacity>
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
