
import {View} from "react-native"
import { Routes } from "./pages/routes";

import { NavigationContainer } from "@react-navigation/native";



export default function App() {

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
   
  );
}
