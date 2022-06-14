
import { useState } from 'react';
import uuid from 'react-native-uuid';
import {StatusBar} from 'expo-status-bar'
import { StyleSheet, 
  Text, 
  View 
  ,Button 
  ,TextInput
  ,ScrollView,
FlatList} from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import React from 'react';

export default function App() {
  const [courseGoals,setCourseGoals] = useState([])
  const [modalIsVisible,setModalVisility] = useState(false)
  function addGoalHandler(enteredGoalText)
  {
    setCourseGoals((currentCourseGoals)=>{
      return [
        ...currentCourseGoals,
        {text:enteredGoalText,
          id:uuid.v4()}
      ]
    })
    stopAddGoalHandler();
  }
  function startAddGoalHandler ()
  {
    setModalVisility(true)
  }
  function stopAddGoalHandler (){
    setModalVisility(false) 
  }
  function deleteGoalHandler(id)
  {
    setCourseGoals((currentCourseGoals)=>{
      return (currentCourseGoals.filter((ele)=>
      {
        return ele.id !==id}))
    })
  }

  return (
    <React.Fragment>
    <StatusBar style = "light"></StatusBar>
    <View style = {styles.appContainer}>
      <Button title='Add New Goal' color = "#a065ec"
      onPress = {startAddGoalHandler}
      ></Button>
      <GoalInput 
      onAddGoal = {addGoalHandler}
      closeModal = {stopAddGoalHandler}
      visible = {modalIsVisible}
      ></GoalInput>

     <View style = {styles.goalsContainer}>
     <FlatList 
     data = {courseGoals}
     renderItem = {
      (itemData)=>{
       return (<GoalItem text = {itemData.item.text}
       key = {itemData.item.id}
       id = {itemData.item.id}
       onDeleteItem = {deleteGoalHandler}
       ></GoalItem>)
      }
    }
    keyExtractor = {((item,index)=>{
      return item.id
    })}
     >
      </FlatList>
     </View>
     
    </View></React.Fragment>
  );
}

const styles = StyleSheet.create({
 appContainer:{
  paddingTop:50,
  paddingHorizontal:16,
  flex : 1,
  backgroundColor : '#1e085a'
 },
 inputContainer:{
  flexDirection:'row',
  flex:1,
  justifyContent:'space-between',
  alignItems:'center',

  marginBottom:24,
  borderBottomWidth:1,
  borderColor : '#cccccc'
 },
 textInput:{
  borderWidth:1,
  borderColor:'#cccccc',
  width:'70%',
  marginRight:8,
  padding:8
 },
 goalsContainer:{
 flex:5
 },
 goalItem:{
  margin:8,
  borderRadius:6,
  backgroundColor:'#5e0acc',
  padding:8,
 },
 goalText:{
  color:'white'
 }
});
