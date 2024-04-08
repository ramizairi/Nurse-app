import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './app/screens/Login';
import AdminInterface from './app/screens/AdminInterface';
import NurseMangement from './app/screens/NurseMangement';
import PatientManagement from './app/screens/PatientManagement';

import React, { useEffect } from 'react';
import { useState } from 'react';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();

function insideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Admin Panel' component={AdminInterface} options={{ headerShown: false }}/>
      <InsideStack.Screen name='PatientManagement' component={PatientManagement} options={{ headerShown: false }}/>
      <InsideStack.Screen name='NurseManagement' component={NurseMangement} options={{ headerShown: false }}/>
    </InsideStack.Navigator>
  );

}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('User: ', user);
      setUser(user);
    });
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        {user ? (
          <Stack.Screen name='Inside' component={insideLayout} options={{ headerShown: false }} />
        ) : (
          <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

