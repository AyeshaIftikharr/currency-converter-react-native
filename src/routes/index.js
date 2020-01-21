import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'react-native';
import { HomeScreen, CurrencyListScreen, OptionsScreen, ThemesScreen } from '../screens/home';
import { LoginScreen } from '../screens/login';
import { SignupScreen } from '../screens/signup';

const AuthStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Login',
      },
    },
    Signup: {
      screen: SignupScreen,
      navigationOptions: {
        header: () => null,
        headerTitle: 'Signup',
      },
    },
  },
  {
    headerMode: 'screen',
  },
);

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
    FavoriteCurrencyList: {
      screen: ThemesScreen,
      navigationOptions: {
        headerTitle: 'Favorites',
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

const StackNavigator = createStackNavigator(
  {
    Login: {
      screen: AuthStack,
    },
    Home: {
      screen: HomeStack,
    },
    CurrencyList: {
      screen: CurrencyListStack,
    },
  },
  {
    mode: 'modal',
    headerMode: 'none',
    defaultNavigationOptions: {
      cardStyle: { paddingTop: StatusBar.currentHeight },
    },
  },
);

export const Navigator = createAppContainer(StackNavigator);
