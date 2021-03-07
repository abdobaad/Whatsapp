import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
    container:{
      padding:10,
      flex:1,
      flexDirection:"row",
    },
    MyMsgContainer:{
        justifyContent:'flex-end',
    },
    MyMsg:{
        
        backgroundColor:"#DCF8C5"
    },
    OthersMsg:{
        backgroundColor:"#fff"
    },
    OthersMsgContainer:{
        justifyContent:'flex-start'
    },
    messageWrapper:{
        backgroundColor:"yellow",
        flex:1,
        flexDirection:"column",
        maxWidth:"90%",
        
        padding:5,
        borderRadius:10,
        position:'relative',
    },
    messageText:{
      marginBottom:15
    },
    messageDate:{
        position:"absolute",
        bottom:5,
        right:5,
        color:"grey",
        fontSize:10
    }
})

export default styles