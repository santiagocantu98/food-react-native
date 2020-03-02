import { createStackNavigator, createAppContainer }  from 'react-navigation';
import SearchScreen from './src/screens/SearchScreen';
import RestaurantsShowScreen from './src/screens/RestaurantsShowScreen';

const navigator = createStackNavigator({
  Search: SearchScreen,
  RestaurantsShow: RestaurantsShowScreen
}, {
  initialRouteName: 'Search',
  defaultNavigationOptions: {
    title: 'Business Search'
  }
});

export default createAppContainer(navigator);