import React, { Component, useState } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Screen2({ route, navigation }) {

  const { item } = route.params;
  const [firstName, onChangeFirstName] = useState(item.firstName);
  const [lastName, onChangeLastName] = useState(item.lastName);
  const [email, onChangeEmail] = useState(item.email);
  const [phone, onChangePhone] = useState(item.phone);

  return (
    <View style={styles.container}>
      <Text>
        Main Information
      </Text>
      <View style={{ flexDirection: 'column' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text>First Name</Text>
          <TextInput
            style={{ height: 40, width: windowWidth - 150, margin: 12, borderWidth: 1, padding: 10, }}
            placeholder={item.firstName}
            onChangeText={onChangeFirstName}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Last Name</Text>
          <TextInput
            style={{ height: 40, width: windowWidth - 150, margin: 12, borderWidth: 1, padding: 10, }}
            placeholder={item.lastName}
            onChangeText={onChangeLastName}
          />
        </View>
        <Text>
        Sub Information
      </Text>
        <View style={{ flexDirection: 'row' }}>
          <Text>Email</Text>
          <TextInput
            style={{ height: 40, width: windowWidth - 150, margin: 12, borderWidth: 1, padding: 10, }}
            placeholder={item.email}
            onChangeText={onChangeEmail}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Phone Name</Text>
          <TextInput
            style={{ height: 40, width: windowWidth - 150, margin: 12, borderWidth: 1, padding: 10, }}
            placeholder={item.phone}
            onChangeText={onChangePhone}
          />
        </View>
      </View >
    </View >
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
