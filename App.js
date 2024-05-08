import React, { useState } from 'react';


import { StyleSheet, Text, View, TextInput, Button, ScrollView } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [coursegoals , setCourseGoals] = useState([])
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal)
    setCourseGoals([ ...coursegoals , enteredGoal])
  };
  return (
    <View style={styles.appContainer  }>
      <View style={styles.inputContainer} >
        <TextInput style = {styles.textInput} placeholder="Your Course Goal"  onChangeText={goalInputHandler} />
        <Button title="ADD" onPress={addGoalHandler} />
      </View>
      <View />
      <View style = {styles.goalsContainer}>
      <ScrollView >
       
      {coursegoals.map((goal) => (
  <View style={styles.goalItem} key={goal}>
    <Text style={styles.goalText}>{goal}</Text>
  </View>
))}

      
      </ScrollView>
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
  } , 
  goalItem : {
    margin  : 8 , 
    padding : 8 ,
    borderRadius :6 , 
    backgroundColor :  'indigo' , 
    
  } , 
  goalText : {
    color : 'white' , 
   
  }

});
