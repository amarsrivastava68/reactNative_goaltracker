import React, { useState } from 'react';


import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
  };
  return (
    <View style={styles.appContainer  }>
      <View style={styles.inputContainer} >
        <TextInput style = {styles.textInput} placeholder="Your Course Goal"  onChangeText={goalInputHandler} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View />
      <View style = {styles.goalsContainer}>
        <Text>List of Goals  . . .</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
     
flex :1 , 
    paddingTop: 50,
    paddingHorizontal : 16

  },
  inputContainer: {
    flex: 1 ,
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems  : 'center',
    marginBottom : 24,
    borderBottomWidth : 1  ,
    borderBottomColor : 'black'
    
  }  ,
  textInput : {
    borderWidth  : 1 , 
    borderColor : '#cccccc' , 
    width : '85%' , 
    paddingLeft : 4
  } , 
  goalsContainer : {
    flex : 6
  }

});
