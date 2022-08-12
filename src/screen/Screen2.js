import React, { Component, useState, useRef } from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity, TextInput, Button, ScrollView } from "react-native";
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

function Screen2({ route, navigation }) {

  const { item } = route.params;
  const [firstName, onChangeFirstName] = useState(item.firstName);
  const [lastName, onChangeLastName] = useState(item.lastName);
  const [email, onChangeEmail] = useState(item.email);
  const [phone, onChangePhone] = useState(item.phone);

  const refInput2 = useRef();
  const refInput3 = useRef();
  const refInput4 = useRef();

  const checkTextInput = () => {
    console.log(item.firstName)
    console.log(item.lastName)

    if (onChangeFirstName && onChangeLastName == null) {
      alert('Please enter first and last name.');
      return;
    }
    else
      navigation.navigate('Screen1')
    return;
  };

  return (
    <ScrollView style={styles.container}>
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
            returnKeyType="next"
            onSubmitEditing={() => refInput2.current.focus()}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Last Name</Text>
          <TextInput
            style={{ height: 40, width: windowWidth - 150, margin: 12, borderWidth: 1, padding: 10, }}
            placeholder={item.lastName}
            onChangeText={onChangeLastName}
            returnKeyType="next"
            onSubmitEditing={() => refInput3.current.focus()}
            ref={refInput2}
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
            returnKeyType="next"
            onSubmitEditing={() => refInput4.current.focus()}
            ref={refInput3}
          />
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text>Phone Name</Text>
          <TextInput
            style={{ height: 40, width: windowWidth - 150, margin: 12, borderWidth: 1, padding: 10, }}
            placeholder={item.phone}
            onChangeText={onChangePhone}
            ref={refInput4}
          />
        </View>
      </View >
      <Button 
        title = "Save" 
        style = {{backgroundColor: 'red'}} 
        onPress = {checkTextInput}/>
    </ScrollView >
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
