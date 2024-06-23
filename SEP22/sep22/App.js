import ProductsScreen from "./views/productsScreen";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {WishListScreen} from "./views/wishListScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={"Products"} component={ProductsScreen}/>
          <Stack.Screen name={"WishList"} component={WishListScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
  );
}

