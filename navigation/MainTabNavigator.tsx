import { Fontisto, Ionicons } from '@expo/vector-icons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabCameraScreen from '../screens/TabCameraScreen';
import TabChatScreen from '../screens/TabChatScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { MainTabParamList, TabCameraParamList, TabChatParamList, TabTwoParamList } from '../types';

const MainTab = createMaterialTopTabNavigator<MainTabParamList>();

export default function MainTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="Chat"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].background,
          style:{
           backgroundColor:Colors[colorScheme].tint 
          },
          indicatorStyle:{
              backgroundColor:Colors[colorScheme].background,
              height:4,
              borderTopLeftRadius:5,
              borderTopRightRadius:5,
            
          },
          labelStyle:{
            fontWeight:"bold"
          },
          showIcon:true,
          
      }}>
      <MainTab.Screen
        name="Camera"
        component={TabCameraNavigator}
        options={{
          tabBarIcon: ({ color }) => <Fontisto name="camera" size={16} color={color} />,
          tabBarLabel:()=> null,   
        }}
      />  
       <MainTab.Screen
        name="Chat"
        component={TabChatNavigator}
      />
      
      <MainTab.Screen
        name="Status"
        component={TabTwoNavigator}
      /> 
       <MainTab.Screen
        name="Calls"
        component={TabThreeNavigator}
    /> 

      
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabCameraStack = createStackNavigator<TabCameraParamList>();


function TabCameraNavigator() {
  return (
    <TabCameraStack.Navigator>
      <TabCameraStack.Screen
        name="TabCameraScreen"
        component={TabCameraScreen}
        options={{ headerTitle: 'Tab Camera Title' }}
      />
    </TabCameraStack.Navigator>
  );
}

const TabChatStack = createStackNavigator<TabChatParamList>();


function TabChatNavigator() {
  return (
    <TabChatStack.Navigator>
      <TabChatStack.Screen
        name="TabChatScreen"
        component={TabChatScreen}
      />
    </TabChatStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}

function TabThreeNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: 'Tab Two Title' }}
      />
    </TabTwoStack.Navigator>
  );
}