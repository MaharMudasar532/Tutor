import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native';
import Login from '../Screens/Login';

// Import Screens


const Stack = createNativeStackNavigator();

const HomeStack = () => {
  return (
    // <NavigationContainer>
      <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} />
     
         
        </Stack.Navigator>
      </SafeAreaView>
    // </NavigationContainer>
  );
};

export default HomeStack;
