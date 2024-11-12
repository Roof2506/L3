import React,{useState} from 'react';
import {View, Text, TextInput, Button, Alert, TouchableOpacity, ToastAndroid} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const InputBox = ({label, onChangeText}) => {
    return (
        <View>
            <Text>{label}</Text>
            <TextInput style={{borderWidth:1}} onChangeText={onChangeText}/>
        </View>
    )
}

const MyApp = () => {
    // Exercise 1G
    const [name,setName] = useState('');
    const [pw,setPw] = useState('');
    const [type,setType] = useState('');
  return(
      <View style={{padding:20,paddingTop:50 }}>
         {/*Exercise 1B*/}
         <Text>User Type:</Text>
         <RNPickerSelect
             onValueChange={(value) => setType(value)}
             items={[
                 { label: 'Admin', value: 'Admin' },
                 { label: 'Guest', value: 'Guest' },
             ]}
          />
          <InputBox label="User Name:" onChangeText={(text) => setName(text)}/>
         {/*Exercise 1A*/}
          <InputBox label="User Name:" onChangeText={(text) => setPw(text)}/>
         {/*Exercise 1C & 1D*/}
         {/*<Button*/}
         {/*  onPress={() => Alert.alert("Welcome!")}*/}
         {/*  title="Log In"*/}
         {/*/>*/}
         {/*Exercise 1E*/}
         {/*<TouchableOpacity onPress={() => Alert.alert("Welcome!")}>*/}
         {/*    <Text>Log In</Text>*/}
         {/*</TouchableOpacity>*/}
         {/*Exercise 1F*/}
         <TouchableOpacity onPress={() => {
             const correctPassword = '123';
             let mymessage = 'Error! Wrong Password';
             if (pw == correctPassword) {
                 mymessage = 'Welcome ' + type + ' ' + name
             }
             ToastAndroid.show(mymessage, ToastAndroid.SHORT);
         }
         }>
             <Text>Log In </Text>
         </TouchableOpacity>
          <Text>{pw}</Text>
       </View>
  );
};
export default MyApp;
