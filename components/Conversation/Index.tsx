import React, { useEffect, useState } from 'react';
import moment from 'moment';
import { Text, View } from 'react-native';
import { Message } from '../../types';
import styles from './style';

export type ConversationProps = {
   message:Message,

}

const Conversation = (props:ConversationProps) => {
    
    const {message} = props;

    const [isFromMe,setIsFromMe] = useState(false);

    useEffect(()=>{
        const MessageFrom = message.user.id === 'u1';
        setIsFromMe(MessageFrom);
    },[])
    

    return (
        <View style={[styles.container,isFromMe ? styles.MyMsgContainer : styles.OthersMsgContainer]}>
            <View style={[[styles.messageWrapper,isFromMe ? styles.MyMsg:styles.OthersMsg]]}>
                <Text style={styles.messageText}>{message.content}</Text>
                <Text style={styles.messageDate}>{moment(message.createdAt).fromNow()}</Text>
            </View>
        </View>
    );
};

export default Conversation;