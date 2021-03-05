import React from "react";
import {View,Text,Image, Dimensions} from "react-native";
import { ChatRoom } from "../../types";
import moment from "moment";
import styles from "./style";

type ChatListItemProps = {
    ChatRoomData:ChatRoom
}

const ChatListItem = (props:ChatListItemProps) => {
    const {ChatRoomData} = props;




    const Contact = ChatRoomData.users[1];
   const showLastConversation = ()=>{
      const created = new Date(ChatRoomData.lastMessage.createdAt);
      console.log(created);
      const todayDate = new Date(Date.now());
       console.log(todayDate);

      const deffirence = todayDate.getDate() - created.getDate();


      console.log(deffirence);
      

    //  console.log(created);
      
      
    //  return created
   }
    
   return(
       <View style={styles.container}>
         <Image source={{uri:Contact.imageUri}} style={styles.avatar} />
         <View style={styles.ConversationContainer}>
               <View style={styles.top}>

                   <Text style={styles.username}>{Contact.name}</Text>
                   <Text style={styles.lastConversation}>{moment(ChatRoomData.lastMessage.createdAt).format("DD/MM/YYYY")}</Text>
               </View>
               <Text numberOfLines={1}  style={styles.bottom}>
                   {ChatRoomData.lastMessage.content}
               </Text>
         </View> 
       </View>
   )
}

export default ChatListItem;