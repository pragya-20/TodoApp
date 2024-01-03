import React, {useState} from 'react';
import {View, FlatList, Text, Pressable, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListView = ({data}) => {
  const tasks = data;
  const [toggelCheckbox, setCheckbox] = useState(false);

  const handleCheckboxChange = (itemId, newValue) => {
    setCheckbox(prevState => ({
      ...prevState,
      [itemId]: newValue,
    }));
  };

  const handleDelete = itemId => {};

  return (
    <View style={styles.listContainer}>
      <FlatList
        data={tasks}
        renderItem={({item}) => {
          const itemId = `${item.id}`;
          const isChecked = toggelCheckbox[itemId] || false;
          return (
            <View style={styles.listItemContainer}>
              <CheckBox
                disabled={false}
                value={isChecked}
                onValueChange={newValue => {
                  handleCheckboxChange(itemId, newValue);
                }}
                tintColors={true ? 'red' : '#fff'}
                style={styles.alignCheckbox}
              />
              <Text style={styles.alignItemContent}>{item.title}</Text>
              <Pressable
                style={styles.alignIcon}
                onPress={() => {
                  console.log('Itemm in Pressable', itemId);
                  handleDelete(itemId);
                }}>
                <Icon name="delete" size={30} color="#fff" />
              </Pressable>
            </View>
          );
        }}
        inverted
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  listContainer: {
    marginTop: 50,
    flex: 1,
    marginHorizontal: 40,
    marginBottom: 12,
  },
  listItemContainer: {
    flexDirection: 'row',
    borderColor: '#fff',
    borderWidth: 1,
    marginVertical: '4%',
    borderRadius: 10,
    alignContent: 'center',
    justifyContent: 'space-around',
  },
  alignCheckbox: {
    alignSelf: 'center',
  },
  alignItemContent: {
    fontSize: 18,
    margin: 10,
    textAlignVertical: 'center',
    color: '#fff',
  },
  alignIcon: {alignSelf: 'center'},
});

export default ListView;
