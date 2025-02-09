import {View} from "react-native"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./home/Home"
import { Passwords } from "./passwords/Passwords";
import {Ionicons} from  '@expo/vector-icons'

const Tab = createBottomTabNavigator();

export function Routes(){

    return(
        <Tab.Navigator>
            <Tab.Screen 
                name="Home"
                component={Home}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon:({focused}) =>{
                        if(focused){
                            return <Ionicons color={"#392DE9"} size={22} name="home" />
                        }else{
                            return <Ionicons color={"#0E0E0E"} size={20} name="home-outline" />
                        }
                    }

                }}
            />
            <Tab.Screen 
                name="Passwords"
                component={Passwords}
                options={{
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarIcon:({focused}) =>{
                        if(focused){
                            return <Ionicons color={"#392DE9"} size={22} name="key" />
                        }else{
                            return <Ionicons color={"#0E0E0E"} size={20} name="key-outline" />
                        }
                    }

                }}
            />
        </Tab.Navigator>
    )
}