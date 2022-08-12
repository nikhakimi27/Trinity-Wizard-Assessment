import React, { Component } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

function Screen2({route, navigation}) {
  return (
    <View style={styles.container}>
      <View style = {styles.header_container}>
        <Text style= {styles.titleText}>
          Profile Screen!
        </Text>
        </View>
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

export default Screen2;
