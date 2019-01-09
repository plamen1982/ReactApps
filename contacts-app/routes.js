import React from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator } from "react-navigation";

import Contacts from "./screens/Contacts";
import Profile from "./screens/Profile";
import Favorites from "./screens/Favorites";
import User from "./screens/User";

const AppNavigator = createBottomTabNavigator(
{
  Contacts: {
    screen: Contacts,
  },

//   Profile: {
//     screen: Profile,
//   },
  Favorites: {
      screen: Favorites,
  },
  User: {
      screen: User,
  }
},

);

export default createAppContainer(AppNavigator);
