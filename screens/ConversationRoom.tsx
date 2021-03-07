import React , {useEffect, useState} from "react";
import { useRoute } from "@react-navigation/core";
import { FlatList, ImageBackground, Text, View } from "react-native";
import Conversation from "../components/Conversation/Index";
import Chats from "../data/Chats";

import BG from "../assets/images/BG.jpg"



const ConversationRoomScreen =  () =>{
    const route = useRoute();

    const [ConversationData,setConversationData] = useState({})

    console.log(route.params);

    useEffect(()=>{

     
    },[])
    
   return(
      <ImageBackground style={{width:'100%',height:"100%"}} source={BG}>
           <FlatList 
        data={Chats.messages}
        renderItem={({item})=>(<Conversation message={item}  />)}
       />
       <View>
           
       </View>
      </ImageBackground>
   )        
}

export default ConversationRoomScreen;