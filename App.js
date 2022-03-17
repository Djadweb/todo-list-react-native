import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';
import { useState } from 'react/cjs/react.development';
import GoalItem from './Components/GoalItem';

export default function App() {
  const [goal, setGoal] = useState('')
  const [goals, setGoals] = useState([])

  const goalInputHandler = (value) => {        
    setGoal(value)        
  }

  const addGoal = () => {
    goal && setGoals([...goals, goal])
    setGoal('')
  }  

  const deleteItem = (item) => {
    setGoals(goals.filter((g) => g != item))
    console.log(goals)
  }
  return (    
    <View style={styles.container}>

      <View style={styles.form}>
        <TextInput
          style={styles.textInput} 
          placeholder="New Goal" 
          onChangeText={goalInputHandler}
          value={goal}
        />      
        <Button onPress={addGoal} title="Add Task"/>
      </View>

      <View style={styles.listItem}>
        <FlatList
          data={goals}
          renderItem={itemData => <GoalItem item={itemData.item} deleteItem={deleteItem}/>}
        />
      </View>      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {        
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',    
    paddingVertical: 120,
  },
  textInput: {
    width: 280,
    height: 50,     
    borderWidth: 1, 
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  listItem: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',      
    marginVertical: 20,
  },  
});