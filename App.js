import { StackNavigator} from 'react-navigation';
import Login from './src/layout/Login';
import Splash from './src/layout/Splash';
import MainPage from './src/layout/MainPage';

const navigation = StackNavigator ({
  Splash :{
    screen:Splash,
  },
  Login:{
    screen:Login,
  },
  Main :{
    screen:MainPage,
  },
});


export default navigation;