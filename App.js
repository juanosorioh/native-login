import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Form from "./pages/Form";
import Anuncios from "./pages/Anuncios";
import { NativeBaseProvider } from "native-base";
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Form" component={Form} />
        <Stack.Screen name="Anuncios" component={Anuncios} />
      </Stack.Navigator>
    </NavigationContainer>
    </NativeBaseProvider>
  );
}
