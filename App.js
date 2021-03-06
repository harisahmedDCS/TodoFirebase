import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import TodoList from './src/components/TodoList';

const SWidth = Dimensions.get('window').width;
const App = () => {
  const [check, setCheck] = useState(false);
  const [text, setText] = useState('');
  var [todo, setTodo] = useState([]);
  const [data, setData] = useState('');
  useEffect(() => {
    setCheck(check);
    setTodo(todo);
  }, [check]);
  const onPress = () => {
    setText('');
    setTodo([
      ...todo,
      {
        id: Math.random(),
        name: text,
      },
    ]);
  };

  const EditTodo = index => {
    console.log(index);
    const arrIndex = todo.findIndex(val => {
      return val.id == index;
    });
    todo[arrIndex].name = text;
    setCheck(!check);
    console.log('todo[arrIndex]', todo);
  };
  const stateLift = data => {
    setData(data);
  };
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} onChangeText={setText} value={text} />
      <View style={{alignItems: 'center'}}>
        <TouchableOpacity
          style={styles.btn}
          activeOpacity={0.8}
          onPress={onPress}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#fff'}}>
            Add
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.btn, {backgroundColor: 'tomato', marginTop: 10}]}
          activeOpacity={0.8}
          onPress={() => EditTodo(data)}>
          <Text style={{fontWeight: 'bold', fontSize: 15, color: '#fff'}}>
            Edit
          </Text>
        </TouchableOpacity>
        <TodoList
          todo={todo}
          setTodo={setTodo}
          setText={setText}
          text={text}
          stateLift={stateLift}
        />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginLeft: 20,
    marginRight: 20,
  },
  input: {
    height: 40,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    borderColor: '#808080',
  },
  center: {},
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    width: SWidth * 0.3,
    height: 40,
    backgroundColor: '#E8740E',
    borderRadius: 8,
  },
});
