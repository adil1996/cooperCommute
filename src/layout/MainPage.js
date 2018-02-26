import { TabNavigator } from 'react-navigation';
import BookCab from './BookCab';
import ManageTrip from './ManageTrip';
import Profile from './Profile';

var MainScreenNavigator = TabNavigator({
    BookCab:{
      screen: BookCab
    },
    ManageTrip:{
      screen:ManageTrip
    },
    Profile:{
      screen:Profile
    }
  },
  {
    tabBarPosition: 'bottom',
  });
  MainScreenNavigator.navigationOptions = {
      header: null
  };

  export default MainScreenNavigator;