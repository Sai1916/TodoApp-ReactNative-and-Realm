/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
import React,{useState} from 'react';
import {View, TextInput, StyleSheet,Text, TouchableOpacity} from 'react-native';
import realm from '../realm/realm';
import ObjectId from 'bson-objectid';
import { useNavigation } from '@react-navigation/native';

const AddTodoScreen = () => {
    const [title,setTitle] = useState();
    const [description,setDescription] = useState();
    console.log(ObjectId());

    const navigation = useNavigation();

    const addTodo = () => {
          realm.write(() => {
            realm.create('Todo', {
              id : new ObjectId(),
              title: title,
              description: description,
            });
          });
          navigation.navigate('TodoList');
    };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Task Title" value={title} onChangeText={(val) => setTitle(val)}/>
      <TextInput style={styles.input} placeholder="Description" multiline value={description} onChangeText={(val) => setDescription(val)}/>
      <TouchableOpacity style={styles.btn} onPress={addTodo}>
        <Text style={styles.btnText}>Add Todo</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddTodoScreen;

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        paddingVertical:20,
        backgroundColor:'white',
    },
    input:{
        width: '92%',
        height: 50,
        backgroundColor: '#e4eaf5',
        borderRadius: 10,
        paddingHorizontal:20,
        fontSize: 18,
        marginVertical: 10,
    },
    btn:{
        alignItems:'center',
        backgroundColor:'blue',
        width: '90%',
        marginHorizontal:20,
        padding:10,
        borderRadius:10,
        marginVertical:10,
    },
    btnText:{
        fontSize: 20,
        color:'white',
        fontWeight:'bold',
    },
});