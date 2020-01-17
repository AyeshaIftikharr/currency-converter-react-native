import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'react-native';
import HomeScreen from '../screens/containers/HomeScreen';
import CurrencyListScreen from '../screens/containers/CurrencyListScreen';
import OptionsScreen from '../screens/containers/OptionsScreen';
import ThemesScreen from '../screens/containers/ThemesScreen';

const HomeStack = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Home',
      },
    },
    Options: {
      screen: OptionsScreen,
      navigationOptions: {
        headerTitle: 'Options',
      },
    },
    Themes: {
      screen: ThemesScreen,
      navigationOptions: {
        headerTitle: 'Themes',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

const CurrencyListStack = createStackNavigator({
  CurrencyList: {
    screen: CurrencyListScreen,
    navigationOptions: ({ navigation }) => ({
      headerTitle: navigation.state.params.title,
    }),
  },
});

const Navigator = createStackNavigator(
  {
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    // headerVisible: false,
    // defaultNavigationOptions: {
    //   headerShown: false,
    // },
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: { paddingTop: StatusBar.currentHeight },
    },
  },
);

export default createAppContainer(Navigator);
