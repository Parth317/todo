import React from 'react';
import { View, Text, StyleSheet, TextInput, Dimensions } from 'react-native';
import { inputPlaceholder } from '../utils/Colors';

const { width } = Dimensions.get('window');

const Input = ({ inputValue, onChangeText, onDoneAddItem }) => (
  <TextInput
    style ={styles.input}
    value={inputValue}
    onChangeText={onChangeText}
    placeholder="Add a note."
    placeholderTextColor={inputPlaceholder}
    multiline={true}
    autoCapitalize="sentences"
    unerlineColorAndroid="transparent"
    selectionColor={'white'}
    maxLength={30}
    returnKeyType="done"
    autoCorrect={false}
    blurOnSubmit={true}
    onSubmitEditing={onDoneAddItem}
  />
);

const styles = StyleSheet.create({
  input: {
    paddingTop: 10,
    paddingRight: 15,
    fontSize: 34,
    color: 'white',
    fontWeight: '500',
    backgroundColor: 'rgba(0,0,0,.1)',
    borderRadius: 5,
    textAlign: 'center',
    width: width - 50,
  },
});

export default Input;
