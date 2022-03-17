import React from 'react'
import { StyleSheet, Text, View, TextInput, Button, FlatList, TouchableOpacity } from 'react-native';

function GoalItem({ item, deleteItem }) {
  return (
    <TouchableOpacity onPress={() => deleteItem(item)}>
        <View style={styles.listItemText} key={item}>
            <Text>{item}</Text>
        </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({    
    listItemText: {
      margin: 50,
      padding: 10,
      width: 300,
      borderColor: 'black',
      borderWidth: 1,
      backgroundColor: '#CCC',        
      textAlign: "center", 
      marginVertical: 10,
    }
  });

export default GoalItem