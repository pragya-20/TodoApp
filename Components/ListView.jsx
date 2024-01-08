import React from 'react';
import {View, FlatList, Text, Pressable, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ListView = ({data, handleDelete, handleCheckboxChange}) => {
  return (
    <View style={styles.listContainer}>
      <FlatList
        data={data}
        renderItem={({item, index}) => {
          const isChecked = item.checked || false;

          return (
            <View style={styles.listItemContainer}>
              <CheckBox
                disabled={false}
                value={isChecked}
                onValueChange={newValue => {
                  handleCheckboxChange(newValue, index);
                }}
                style={styles.alignCheckbox}
                tintColors={{false: '#fff'}}
              />
              <Text style={styles.alignItemContent}>{item.title}</Text>
              <Pressable
                style={styles.alignIcon}
                onPress={() => {
                  handleDelete(index);
                }}>
                <Icon name="delete" size={30} color="#fff" />
              </Pressable>
            </View>
          );
        }}
        keyExtractor={(_, index) => `${index}`}
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
    marginLeft: 10,
    borderColor: '#fff',
  },
  alignItemContent: {
    fontSize: 18,
    margin: 10,
    textAlignVertical: 'center',
    textAlign: 'center',
    color: '#fff',
    width: '80%',
  },
  alignIcon: {alignSelf: 'center', marginRight: 10},
});

export default ListView;
