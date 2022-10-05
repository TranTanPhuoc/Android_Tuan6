import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Card } from 'react-native-paper';
export default function App() {
  const [input, setInput] = useState("");
  const [dataFlat,setData] = useState("");
  const handlePressAdd=()=>{
    setData([...dataFlat,input]);
    setInput("");
  }
  // const handlePressRm= (index)=>{
  //     setData(dataFlat.filter(function(item,itemIndex){
  //         return itemIndex !== index;
  //     }));
  // }
  const  renderItem = ({item}) =>{
    return(
        <Card style={{backgroundColor:'#ffffD1'}}>
          <View style={styles.containerItem} >
                <Text style={{fontSize:20,marginLeft:20,}}>{item}</Text>
                <TouchableOpacity  style={{marginRight:20,}}>
                    <AntDesign name="closecircle" size={24} color="red" />
                </TouchableOpacity>
          </View>
        </Card>
    );
};
  return (
    <SafeAreaView style={styles.container}>
       <View style={styles.containerTop}>
          <View style={styles.containerTop_Input}>
              <Text style={{fontSize:20,width:"25%"}}> Mời nhập: </Text>
              <TextInput
                style={styles.input}
                onChangeText={setInput}
                value={input}
              />
          </View>
          <View style={styles.containerTop_Button}>
    
              <TouchableOpacity onPress={handlePressAdd} style={styles.style_Button}>
                    <Text style={{fontSize:20,}}>Thêm</Text>
              </TouchableOpacity>
          </View>
       </View>
       <View style={styles.containerFlatList}>
        <FlatList keyExtractor={(item, index) => index.toString()} style={{flex:1}} data={dataFlat} renderItem={renderItem} />
        
       </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerTop:{
    flex:0.2,
  },
  containerTop_Button:{
    marginTop:10,
    marginLeft:20,
    marginRight:20,
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
  },
  style_Button:{
    paddingTop:20,
    paddingBottom:20,
    paddingLeft:30,
    paddingRight:30,
    backgroundColor:'#DDDDDD',
    width:150,
    alignItems:'center',
    borderRadius:20,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    width:"75%"
  },
  containerTop_Input:{
    marginTop:20,
    marginLeft:20,
    marginRight:20,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
  },
  containerFlatList:{
    flex:0.8,
    marginLeft:20,
    marginRight:20,
    backgroundColor:'#CCCCCC',

  },
  containerItem:{
    width:"100%",
    height:50,
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderBottomWidth:1,
  },
  
});
