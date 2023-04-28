import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './Login';
import Maps from './Maps';
import ProfileSettings from './ProfileSettings';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name="LoginPageDemo" component={Login} />
        <Stack.Screen name="Maps" component={Maps} />
        <Stack.Screen name="ProfileSettings" component={ProfileSettings} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};