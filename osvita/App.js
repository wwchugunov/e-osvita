import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';  // Импортируйте экраны
import RegistrationScreen from './screens/RegistrationScreen';
// import ProfileScreen from './screens/ProfileScreen'; // дубль профиля
import ToolsScreen from './screens/ToolsScreen'; 
import StudentCardScreen from './screens/StudentCardScreen';
import ScheduleScreen from './screens/ScheduleScreen' //розклад занять
import ExamsScheduleScreen from './screens/ExamsScheduleScreen'
import PerformanceScreen from './screens/PerformanceScreen' 

import PaymentsScreen from './screens/PaymentsScreen'
import StudentGuideScreen from './screens/StudentGuideScreen' 
import СabinetScreen from './screens/СabinetScreen'
import SetingsScreeen from './screens/SetingsScreen'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home"  component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Registration" component={RegistrationScreen}options={{ title: 'Реєстрація', headerShown: false}}/>
        <Stack.Screen name="Tools" component={ToolsScreen} options={{ title: 'Головне меню', headerShown: false }} />
        <Stack.Screen name="StudentCard" component={StudentCardScreen} options={{ title: 'Головне меню', headerShown: false }} />
        <Stack.Screen name="ScheduleScreen" component={ScheduleScreen} options={{ title: 'Розклад занять', headerShown: false }} />
        <Stack.Screen name="ExamsScheduleScreen" component={ExamsScheduleScreen} options={{ title: 'Розкла іспитів', headerShown: false }} />
        <Stack.Screen name="PerformanceScreen" component={PerformanceScreen} options={{ title: 'Успішність', headerShown: false }} />
        <Stack.Screen name="PaymentsScreen" component={PaymentsScreen} options={{ title: 'Платежі', headerShown: false }} />
        <Stack.Screen name="StudentGuideScreen" component={StudentGuideScreen} options={{ title: 'Довідник студента', headerShown: false }} />
        <Stack.Screen name="СabinetScreen" component={СabinetScreen} options={{ title: 'Профіль', headerShown: false }} />
        <Stack.Screen name="SetingsScreeen" component={SetingsScreeen} options={{ title: 'Довідник студента', headerShown: false }} />
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
