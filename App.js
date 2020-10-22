import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import { Form, ProfileScreen } from "./Screens";

const DrawerNavigator = createDrawerNavigator({
  Form: Form,
  Profile: ProfileScreen,
});

export default createAppContainer(DrawerNavigator);
