import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Shesha from '../screens/Shesha';
import Ikaya from '../screens/Ikaya';
import UmtampoWakho from '../screens/UmtampoWakho';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { themeTextColor } from '../theme';

const Tab = createBottomTabNavigator();
const BottomNavigation = () => {
  return (
      // Bottom Naivgation Options
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: themeTextColor.secondary(1),
          tabBarStyle: {
            backgroundColor: '#282828',
            borderTopWidth: 0
          },
          headerShown: false,
        }}>
      
        <Tab.Screen
          name="Ikhaya"
          component={Ikaya}
          options={{
            tabBarIcon: ({focused}) => (
              <Feather 
              name='home'
              size={23} 
              color={focused?"white":themeTextColor.secondary(1)}
              />
            ),
          }}
        />
  
        <Tab.Screen name="Sesha" component={Shesha}   options={{
          tabBarIcon: ({focused}) => (
              <Feather 
            name='search' 
            size={23} 
            color={focused?"white":themeTextColor.secondary(1)}/>
          ),
        }} />
        
        <Tab.Screen name="Umtapo Wako" component={UmtampoWakho} 
        options={{
          tabBarIcon: ({focused}) => (
              <MaterialCommunityIcons 
            name='bookshelf' 
            size={23} 
            color={focused?"white":themeTextColor.secondary(1)}/>
          ),
        }}/>      
      </Tab.Navigator>
    );
  
}

export default BottomNavigation

