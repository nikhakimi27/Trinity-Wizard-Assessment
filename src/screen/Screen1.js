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
        style = {styles.cardContainer}
        onPress={() => navigation.navigate('Screen2', {item})}>
        <Image
        style = {{height: 30, width: 30}}
        source={require('../asset/orange.png')}
      />
        <Text style = {styles.cardName}>
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
        ItemSeparatorComponent={() => (
          <View style={{ backgroundColor: "grey", height: 1, width: windowWidth}} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(255, 255, 255, 1)'
      },
      cardContainer: {
        width: windowWidth,
        height: windowHeight / 10,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignContent:'space-between',
        marginHorizontal: 20
      },
      cardName: {
        fontSize: 30,
        marginLeft: 30,
      },
});

export default Screen1;
