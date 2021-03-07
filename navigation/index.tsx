import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { ColorSchemeName, Image, Text,View } from 'react-native';

import NotFoundScreen from '../screens/NotFoundScreen';
import { RootStackParamList } from '../types';
import MainTabNavigator from './MainTabNavigator';
import LinkingConfiguration from './LinkingConfiguration';

import Colors from "../constants/Colors"

import { Octicons ,MaterialCommunityIcons, MaterialIcons, FontAwesome5} from '@expo/vector-icons'; 
import ConversationRoomScreen from '../screens/ConversationRoom';


// If you are not familiar with React Navigation, we recommend going through the
// "Fundamentals" guide: https://reactnavigation.org/docs/getting-started
export default function Navigation({ colorScheme }: { colorScheme: ColorSchemeName }) {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

// A root stack navigator is often used for displaying modals on top of all other content
// Read more here: https://reactnavigation.org/docs/modal
const Stack = createStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator screenOptions={{
      headerStyle:{
        backgroundColor:Colors.light.tint,
        height:90,
        shadowOpacity:0,
        elevation:0,
        },
        
        
      headerTintColor: Colors.light.background,
      headerTitleAlign:"left",
      headerTitleStyle:{
        fontWeight:"bold"
      }
    }}>
      <Stack.Screen name="Root" 
      options={{
        title:"Whatsapp",
        headerRight:()=><View style={{backgroundColor:Colors.light.tint,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",width:70,marginRight:10}}>
                            <Octicons name="search" size={24}  color="#fff" />
                            <MaterialCommunityIcons name="dots-vertical" size={24} color="#fff" />
                        </View>
      }}
     component={MainTabNavigator} />
      <Stack.Screen 
      name="ConversationRoom"
      component={ConversationRoomScreen}
      options={({route})=>(
        {
         headerTitle:()=>(<View style={{width:200,flex:1,flexDirection:"row",alignItems:"center",height:30,marginLeft:-30}}>
           <Image style={{height:40,width:40,marginRight:10,borderRadius:50}} source={{uri:route.params.image}} />
           <Text style={{color:"#fff",fontSize:16,fontWeight:"bold"}} >{route.params.name}</Text>
         </View>),
         headerRight:()=>(
           <View style={{display:"flex",flexDirection:"row",marginRight:10,width:100,justifyContent:"space-between"}}>
             <MaterialIcons name="call" size={22} color={"#fff"} />
             <FontAwesome5 name="video" size={22} color={"#fff"} />
             <MaterialCommunityIcons name="dots-vertical" size={22} color={'#fff'} />
           </View>
         )
        })} />
    </Stack.Navigator>
  );
}


