import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const ListView = ({data}) => {
  console.log('on New Componenet - Taks List-------', data);
  const tasks = data;
  const [toggelCheckbox, setCheckbox] = useState(false);
  return (
    <View
      style={{
        marginTop: 50,
        flex: 1,
        marginHorizontal: 40,
        marginBottom: 12,
      }}>
      <FlatList
        data={tasks?.reverse()}
        renderItem={({item}) => {
          return (
            <View
              style={{
                flexDirection: 'row',
                borderColor: '#fff',
                borderWidth: 1,
                marginVertical: '4%',
                borderRadius: 10,
                alignContent: 'center',
              }}>
              <CheckBox
                disabled={false}
                value={toggelCheckbox}
                onValueChange={newValue => {
                  setCheckbox(newValue);
                }}
                style={{alignSelf: 'center'}}
              />
              <Text
                style={{
                  fontSize: 18,
                  margin: 10,
                  textAlignVertical: 'center',
                  color: '#fff',
                }}>
                {item.title}
              </Text>
            </View>
          );
        }}
        keyExtractor={(item, index) => `${index}`}
      />
    </View>
  );
};

export default ListView;
