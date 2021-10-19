//apis
import React, {Component} from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

//drawer
import DrawerContent from './Drawer';
import BottomTabsStack from '../BottomTabs/BottomTabStack';
import Polls from '../Polls/polls';
import Groups from '../Groups/Groups';
import Revision from '../Revision/Revision';
import About from '../About/About';
import NCHE from '../NCHE/NCHE';

const Drawer = createDrawerNavigator();

class DrawerStack extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Drawer.Navigator
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{header: () => null}}>
        <Drawer.Screen name="DrawerHome" component={BottomTabsStack} />
        <Drawer.Screen name="Polls" component={Polls} />
        <Drawer.Screen name="Groups" component={Groups} />
        <Drawer.Screen name="Revision" component={Revision} />
        <Drawer.Screen name="About" component={About} />
        <Drawer.Screen name="NCHE" component={NCHE} />
      </Drawer.Navigator>
    );
  }
}

export default DrawerStack;
