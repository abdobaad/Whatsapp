import React from "react";
import {View,Text,Image, Dimensions} from "react-native";
import { ChatRoom } from "../../types";
import moment from "moment";
import styles from "./style";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";

type ChatListItemProps = {
    ChatRoomData:ChatRoom
}

const ChatListItem = (props:ChatListItemProps) => {
    const {ChatRoomData} = props;
    const navigation = useNavigation();
    const Contact = ChatRoomData.users[1];

    const onClick = () => {
        navigation.navigate('ConversationRoom',{id:ChatRoomData.id,name:Contact.name,image:Contact.imageUri})
     }
    
   return(
      <TouchableWithoutFeedback onPress={onClick} >
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
      </TouchableWithoutFeedback>
   )
}

export default ChatListItem;