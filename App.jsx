import 'react-native-get-random-values';

import {v4 as uuidv4} from 'uuid';

import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import ListView from './Components/ListView';

const App = () => {
  const [taskList, setTaskList] = useState([]);

  const ref = useRef('');

  const handleAddTask = () => {
    if (ref.current.value === undefined) {
      console.log('I am undefined!', taskList);
    } else {
      const items = [
        {id: uuidv4(), title: ref.current.value, checked: false},
        ...taskList,
      ];

      setTaskList(items);
    }
  };

  const handleCheckboxChange = (newValue, index) => {
    setTaskList(prevTasks => {
      const updatedTaskList = [...prevTasks];

      updatedTaskList[index].checked = newValue;

      return updatedTaskList;
    });
  };

  const handleDelete = index => {
    setTaskList(prevTasks => {
      const updatedTaskList = prevTasks.filter((_, i) => i !== index);

      return updatedTaskList;
    });
  };

  const DismissKeyboard = ({children}) => (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );

  return (
    <DismissKeyboard>
      <View style={styles.container}>
        <Text style={styles.title}> Todo App</Text>

        <View style={styles.inputTaskContainer}>
          <TextInput
            ref={ref}
            onChangeText={e => {
              ref.current.value = e;
            }}
            placeholder="Enter your task..."
            placeholderTextColor={'#fff'}
            style={styles.taskInputStyle}
            multiline
          />

          <Pressable onPress={handleAddTask} style={styles.buttonStyle}>
            <Text style={styles.buttonTextStyle}>Add</Text>
          </Pressable>
        </View>

        <ListView
          data={taskList}
          handleCheckboxChange={handleCheckboxChange}
          handleDelete={handleDelete}
        />
      </View>
    </DismissKeyboard>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: '#1E1B3C',
  },

  title: {
    fontSize: 20,

    marginTop: '10%',

    marginHorizontal: '10%',

    color: '#ffffff',
  },

  inputTaskContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#fff',
    margin: 40,
    alignContent: 'center',
    justifyContent: 'space-between',
  },
  taskInputStyle: {
    borderRadius: 10,
    width: '80%',
    borderColor: '#fff',
    color: '#fff',
    marginHorizontal: 10,
  },
  buttonStyle: {
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
  },
  buttonTextStyle: {fontSize: 20, margin: 6, color: '#fff'},
});

export default App;
