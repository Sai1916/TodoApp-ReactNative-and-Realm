/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
/* eslint-disable prettier/prettier */
/* eslint-disable eol-last */
import {View, ScrollView, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React,{useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import realm from '../realm/realm';

const TodoScreen = () => {
    const navigation = useNavigation();
    console.log(realm.objects('Todo'));

    const [todos,setTodos] = useState([]);
    useEffect(() => {
        const todoData = realm.objects('Todo');
        setTodos(todoData);
    },[]);

    const deleteTodo = (id) => {
        realm.write(() => {
            const delTodo = realm.objectForPrimaryKey('Todo',id);
            realm.delete(delTodo);
        });
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const data = [
        {
            id: 1,
            title: 'Task 1',
            task: 'lorem epsum is here',
        },
        {
            id: 2,
            title: 'Task 2',
            task: 'lorem epsum is here',
        },
        {
            id: 3,
            title: 'Task 3',
            task: 'lorem epsum is here',
        },
        {
            id: 4,
            title: 'Task 3',
            task: 'lorem epsum is here',
        },
        {
            id: 5,
            title: 'Task 3',
            task: 'lorem epsum is here',
        },
        {
            id: 6,
            title: 'Task 3',
            task: 'lorem epsum is here',
        },
        {
            id: 7,
            title: 'Task 3',
            task: 'lorem epsum is here',
        },
    ];

  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.addBtn} onPress={() => navigation.navigate('AddTodo')}>
            <AntDesign name="plus" size={24} color="white" />
        </TouchableOpacity>
        <View style={styles.scrollView}>
            <ScrollView>
                { todos.length === 0 ?
                    (
                        <View style={[styles.todoView, {flex:1}]}>
                            <Feather name="check-square" size={50} color="black"/>
                            <Text style={styles.text}>No Todos, Add some to view</Text>
                        </View>
                    ) :
                    (todos.map((item,index) => (
                        <TouchableOpacity key={index} style={styles.task}>
                            <View style={styles.card}>
                                <Text style={styles.item}>{item.title}</Text>
                                <Text style={styles.itemtask}>{item.description}</Text>
                            </View>
                            <TouchableOpacity style={styles.deleteBtn} onPress={deleteTodo}>
                                <MaterialCommunityIcons name="delete-outline" size={26} color="red" />
                            </TouchableOpacity>
                        </TouchableOpacity>
                    )))
                }
            </ScrollView>
        </View>
    </View>
    );
};
export default TodoScreen;

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
    },
    addBtn:{
        padding:14,
        borderRadius: 30,
        backgroundColor: 'blue',
        position:'absolute',
        bottom: 40,
        right: 30,
        zIndex:1,
    },
    scrollView:{
        alignItems: 'center',
        marginVertical:10,
    },
    todoView: {
        alignItems: 'center',
        marginVertical: 140,
    },
    text: {
        color: 'black',
        fontSize: 20,
    },
    card:{
        flex:1,
    },
    task:{
        width: '70%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        marginVertical: 8,
        marginLeft:13,
        marginRight:13,
        borderRadius: 8,
        padding: 12,
    },
    item:{
        fontSize: 16,
        fontWeight: 'bold',
        color:'black',
    },
    itemtask:{
        fontSize: 14,
        color:'black',
    },
});