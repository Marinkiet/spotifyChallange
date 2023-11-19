
import React from 'react';
import BottomNavigation from './componants/BottomNavigation';
const Tab = BottomNavigation();
import Shesha from './screens/Shesha';

import { NavigationContainer } from '@react-navigation/native';


function App(): JSX.Element {
  return (
    <NavigationContainer>
    <BottomNavigation/>
    </NavigationContainer> 
  );
}

export default App;
