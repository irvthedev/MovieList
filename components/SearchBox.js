import React from "react";
import { SafeAreaView, TextInput, StyleSheet } from "react-native";

const SearchBox = (props) => {
//const SearchBox = (searchValue, setSearchValue) => {
  return (
    <SafeAreaView>
      <TextInput 
      placeholder='Type to search...' 
      value={props.value}
      onChangeText={ (text) => props.setSearchValue(text)}
      style={styles.input}
      >
      </TextInput>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    color: '#000000'
  },
});

export default SearchBox