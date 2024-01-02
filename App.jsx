import React, {useEffect, useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  FlatList,
} from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72121',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d766656',
    title: 'Forth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d725444',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7452',
    title: 'Sixth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Seventh Item',
  },
];

const App = () => {
  const [taskList, setTaskList] = useState(DATA);
  const ref = useRef('');

  const handleAddTask = () => {
    console.log('Add Task Pressed!', ref.current.value);
    const items = [...taskList];
    items.push({id: '124', title: ref.current.value});
    setTaskList(items);
    console.log('Task List----', taskList);
  };

  console.log('Task List----', taskList);

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Todo App</Text>

      <View style={styles.inputTask}>
        <TextInput
          ref={ref}
          onChangeText={e => {
            ref.current.value = e;
          }}
          placeholder="Enter your task..."
          placeholderTextColor={'#fff'}
          style={{borderWidth: 1, borderRadius: 10, width: '80%'}}
        />
        <Pressable
          onPress={handleAddTask}
          style={{
            alignSelf: 'center',
            borderRadius: 5,
            borderWidth: 1,
            borderColor: '#fff',
          }}>
          <Text style={{fontSize: 20, margin: 6, color: '#fff'}}>Add</Text>
        </Pressable>
      </View>

      <View
        style={{
          borderWidth: 1,
          borderColor: 'green',
          marginTop: 50,
          marginHorizontal: 30,
          height: 300,
        }}>
        <FlatList
          data={taskList.reverse()}
          renderItem={({item}) => {
            return (
              <Text
                style={{
                  margin: 10,
                  textAlign: 'center',
                  fontSize: 15,
                }}>
                {item.title}
              </Text>
            );
          }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1B3C',
  },
  title: {
    fontSize: 20,
    textAlign: 'flex-start',
    marginTop: '10%',
    marginLeft: '10%',
    color: '#ffffff',
  },
  inputTask: {
    flexDirection: 'row',
    marginTop: 50,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    margin: 40,
  },
});

export default App;
