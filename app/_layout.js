import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';

// Import Screens
import BottomTab from './(tabs)/BottomTab';
import Login from './Screens/Login';
import SelectVehicle from './Screens/SelectVehicle';
import Setting from './Screens/Setting';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    // <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Setting" component={Setting} />
          <Stack.Screen name="Date" component={SelectVehicle} />
          <Stack.Screen name="Bottom" component={BottomTab} />
         
        </Stack.Navigator>
      </SafeAreaView>
    // </NavigationContainer>
  );
};

export default App;
