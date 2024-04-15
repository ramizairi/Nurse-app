
import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './FirebaseConfig';
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Login from './app/screens/Login';
import AdminInterface from './app/screens/AdminInterface';
import NurseInterface from './app/screens/NurseInterface';
import NurseMangement from './app/screens/NurseMangement';
import PatientManagement from './app/screens/PatientManagement';
import ShowNurse from './app/screens/ShowNurse';
import ShowPatients from './app/screens/ShowPatients';
import NursingTopics from './app/screens/NursingTopics';
import Glycemie from './app/screens/Glycemie';
import EduServices from './app/screens/EduServices';
import ActivPhy from './app/screens/ServEdu/ActivPhy';
import Comp from './app/screens/ServEdu/Comp';
import EduHyg from './app/screens/ServEdu/EduHyg';
import EduNur from './app/screens/ServEdu/EduNur';
import EduTech from './app/screens/ServEdu/EduTech';
import Physiologie from './app/screens/ServEdu/physiologie';
import ForgotPassword from './app/screens/ForgotPassword';
import SignUp from './app/screens/SignUp';
import PatientDetails from './app/screens/PatientDetails';


enableScreens();

const Stack = createNativeStackNavigator();
const InsideStack = createNativeStackNavigator();


const defaultInsideOptions = { headerShown: true };

function InsideLayout() {
  return (
    <InsideStack.Navigator>
      <InsideStack.Screen name='Nurse Panel' component={NurseInterface} options={{ headerShown: false }} />
      <InsideStack.Screen name='Admin Panel' component={AdminInterface} options={{ headerShown: false }} />
      <InsideStack.Screen name='PatientManagement' component={PatientManagement} options={{ headerShown: false }} />
      <InsideStack.Screen name='NurseManagement' component={NurseMangement} options={{ headerShown: false }} />
      <InsideStack.Screen name='ShowNurse' component={ShowNurse} options={{ headerShown: false }} />
      <InsideStack.Screen name='ShowPatients' component={ShowPatients} options={{ headerShown: false }} />
      <InsideStack.Screen name='Traitement' component={NursingTopics} options={defaultInsideOptions} />
      <InsideStack.Screen name='Glycemie' component={Glycemie} options={defaultInsideOptions} />
      <InsideStack.Screen name='Services éducationnels' component={EduServices} options={defaultInsideOptions} />
      <InsideStack.Screen name='Activite physique' component={ActivPhy} options={defaultInsideOptions} />
      <InsideStack.Screen name='Complilation' component={Comp} options={defaultInsideOptions} />
      <InsideStack.Screen name="Education d'hygiène" component={EduHyg} options={defaultInsideOptions} />
      <InsideStack.Screen name='Education nutritionnelle' component={EduNur} options={defaultInsideOptions} />
      <InsideStack.Screen name='Education technique' component={EduTech} options={defaultInsideOptions} />
      <InsideStack.Screen name='Physiologie' component={Physiologie} options={defaultInsideOptions} />
      <InsideStack.Screen name='ForgotPassword' component={ForgotPassword} options={defaultInsideOptions} />
      <InsideStack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      <InsideStack.Screen name='SignUp' component={SignUp} options={{ headerShown: false }} />
      <InsideStack.Screen name='Détails du Patient' component={PatientDetails} options={defaultInsideOptions} />
    </InsideStack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (authUser) => {
      if (authUser) {
        console.log('User: ', authUser);
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Login'>
          {user ? (
            <Stack.Screen name='Inside' component={InsideLayout} options={{ headerShown: false }} />
          ) : (
            <>
              <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
              <Stack.Screen name='Réinitialisation de mot de passe' component={ForgotPassword} options={{ headerShown: false }} />
              <Stack.Screen name='Crée un compte' component={SignUp} options={{ headerShown: false }} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );  
}
