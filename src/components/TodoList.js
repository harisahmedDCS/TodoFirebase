import {FirebaseFirestoreTypes} from '@react-native-firebase/firestore';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
const SWidth = Dimensions.get('window').width;

const TodoList = ({todo, setTodo, setText, stateLift}) => {
  const onDelete = index => {
    const ans = todo.filter(arr => {
      return index !== arr.id;
    });
    setTodo(ans);
  };
  const onEdit = (name, data) => {
    setText(name);
    stateLift(data);
    // const arrIndex = todo.findIndex(val => {
    //   return val.id == index;
    // });
    // setTodo(todo[arrIndex].push(text));
    // console.log(arrIndex);
  };

  return (
    <ScrollView style={styles.container}>
      {todo.map((item, key) => {
        return (
          <View key={item.id} style={styles.list}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                margin: 12,
              }}>
              <View style={{flex: 8}}>
                <Text style={styles.txt}>{item.name}</Text>
              </View>
              <TouchableOpacity
                style={{flex: 1}}
                onPress={() => onEdit(item.name, item.id)}>
                <Entypo name="edit" color="#fff" size={20} />
              </TouchableOpacity>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => onDelete(item.id, todo)}>
                <MaterialCommunityIcons name="delete" color="#fff" size={20} />
              </TouchableOpacity>
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    width: '100%',
  },
  list: {
    height: 50,
    backgroundColor: '#FEB676',
    marginBottom: 10,
    borderRadius: 10,
  },
  txt: {},
});
