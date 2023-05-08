import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from './screens/MainScreen';
import GroupTourScreen from './screens/GroupTourScreen';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      
      <Stack.Navigator>
      
        <Stack.Screen name="Main" component={MainScreen} options={{headerShown:false}}/>
         <Stack.Screen name="GrpTourScreen" component={GroupTourScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
      
    </NavigationContainer>
  );
}


 