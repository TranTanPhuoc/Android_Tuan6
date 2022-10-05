import { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
export default function App() {
  const [input, setInput] = useState("");
  const [data,setData] = useState(["To-Do","To-Do2"]);
  const handlePressAdd=()=>{
    setData([...data,input]);
    setInput("");
  }
  const handlePressRm= (index)=>{
      setData(data.filter(x=> x!== index));
  }
  const handlePressUpd= (index)=>{
    
}
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
          <ScrollView style={styles.containerList} >
          {
              data.map((item,index) =>  {
                return (
                  <View style={styles.containerItem}  key={index}>
                      <Text style={{fontSize:20,marginLeft:20, width:"70%"}}>{index+1}. {item}</Text>
                      <View style={{display:'flex',flexDirection:'row',width:"30%",alignItems:'center'}}>
                        <TouchableOpacity onPress={()=>handlePressUpd(item)} style={{marginRight:20,}}>
                            <Ionicons name="text-outline" size={30} color="black" />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={()=>handlePressRm(item)} style={{marginRight:20,}}>
                          <AntDesign name="closecircle" size={30} color="red" />
                        </TouchableOpacity>
                      </View>
                  </View>
                )
              }
               )
            }
        </ScrollView>
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
  containerList:{
    flex:0.8,
    marginLeft:20,
    marginRight:20,
    marginTop:20,
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
    backgroundColor:'#00FFCC'
  },
  
});
