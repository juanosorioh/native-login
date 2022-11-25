import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "./pages/Form";
import Anuncios from "./pages/Anuncios";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Form} />
        <Stack.Screen name="Anuncios" component={Anuncios} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
