import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { StatusBar } from 'react-native';

import {
  HomeScreen,
  CurrencyListScreen,
  OptionsScreen,
  ThemesScreen,
  FavoriteCurrencyListScreen,
} from '../screens/home';
import { LoginScreen } from '../screens/login';
import { SignupScreen } from '../screens/signup';
import { AuthLoadingScreen } from '../screens/auth-loader';

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
      screen: FavoriteCurrencyListScreen,
      navigationOptions: ({ navigation }) => ({
        headerTitle: navigation.state.params.title,
      }),
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

const AppStack = createStackNavigator(
  {
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

export const Navigator = createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: AppStack,
      Auth: AuthStack,
    },
    {
      initialRouteName: 'AuthLoading',
    },
  ),
);
