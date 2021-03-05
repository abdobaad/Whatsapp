import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../constants/Colors';


const styles = StyleSheet.create({
     container:{
         
         width:"100%",
         height:80,
         display:'flex',
         flexDirection:"row",
         alignItems:"center",
         padding:10,
        },
     avatar:{
         height:60,
         width:60,
         borderRadius:100,
         marginRight:10
     },
     ConversationContainer:{  
       display:'flex',
       width:Dimensions.get("window").width - 90,
       height:"100%",
       borderBottomWidth:1,
       borderBottomColor:"#f2f5f3" 
     
     },
     top:{
        display:'flex',
        flexDirection:'row',
        justifyContent:"space-between",
        marginBottom:8
     },
     username:{
        fontSize:18,
        fontWeight:"bold"
     },
     lastConversation:{
        fontSize:13,
        fontWeight:"200",
        color:"grey"
     },
     bottom:{
      color:"grey"
     }

})

export default styles;