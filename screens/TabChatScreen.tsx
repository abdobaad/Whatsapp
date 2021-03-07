import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import ChatListItem from '../components/ChatListItem';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ChatRoomData from '../data/ChatRoomData';

export default function TabChatScreen() {
  return (
    <View style={styles.container}>
          {/* {
            ChatRoomData.map((chatRoom,i) =>(
              <ChatListItem key={i} ChatRoomData={chatRoom} />
            ))
          }  */} 
          <FlatList data={ChatRoomData} renderItem={({item})=><ChatListItem  ChatRoomData={item} />} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection:"column",  
   },
 
});
