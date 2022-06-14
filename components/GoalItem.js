import {StyleSheet} from 'react-native'
import {View,Text,Pressable} from 'react-native'
function GoalItem(props)
{
    return(
        
        <View style = {styles.goalItem}>
        <Pressable onPress={
            ()=>{
                props.onDeleteItem(props.id)
            }
        }
        android_ripple = {{color:'#dddddd'}}
        style = {({pressed})=>{
            if(pressed)
            {
                return styles.pressedItem
            }
        }}
        >
        <Text 
        key = {props.id}
        style = {styles.goalText} 
      >{props.text}</Text>
      </Pressable> 
      </View>
      
    )
}

const styles = StyleSheet.create({
    goalItem:{
        margin:8,
        borderRadius:6,
        backgroundColor:'#5e0acc',
        
       },
       pressedItem:{
        opacity:0.5
       },
       goalText:{
        color:'white',
        padding:8,
       }

})
export default GoalItem