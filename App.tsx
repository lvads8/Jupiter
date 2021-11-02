import { StatusBar } from 'expo-status-bar';
import React, { Component} from 'react';
import Dictionary from './i8n/i8n';
import i8nManager from './i8n/i8nManager';
import ColorScheme from './colors/ColorSchemes';
import ColorSchemeManager from './colors/ColorSchemeManager';

import Context from './Context';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import { DarkTheme, DefaultTheme, NavigationContainer, ThemeProvider } from '@react-navigation/native';
import { View, Text } from 'react-native';
import GradeScreen from './screens/GradeScreen';
import SubjectScreen from './screens/SubjectScreen';

interface AppState {
  language: Dictionary
  scheme: ColorScheme
  currentUser: any
};

export default class App extends Component<{}, AppState> {
  readonly i8n: i8nManager = new i8nManager();
  readonly color: ColorSchemeManager = new ColorSchemeManager();
  readonly navigator = createNativeStackNavigator();

  constructor(props: AppState) {
    super(props);
    this.state = {
      language: this.i8n.getLanguage('hu'),
      scheme: this.color.getColorScheme('dark-purple'),
      currentUser: undefined
    };
  }

  render() {
    return (
      <NavigationContainer theme={this.state.scheme.isDark ? DarkTheme : DefaultTheme}>
        <StatusBar style={this.state.scheme.isDark ? 'light' : 'dark'} />
        <Context.Scheme.Provider value={{ scheme: this.state.scheme, setScheme: v => this.setState({ scheme: this.color.getColorScheme(v) }) }}>
        <Context.Language.Provider value={{ language: this.state.language, setLanguage: v => this.setState({ language: this.i8n.getLanguage(v) }) }}>
        <Context.CurrentUser.Provider value={{ currentUser: this.state.currentUser, setCurrentUser: v => this.setState({ currentUser: v }) }}>
            {this.state.currentUser === undefined
              ?
                <LoginScreen />
              :
                <View style={{ flex: 1 }}>
                  <this.navigator.Navigator>
                    <this.navigator.Screen
                      name='Home'
                      options={{ title: 'Jupiter' }}
                      component={HomeScreen}
                    />
                    <this.navigator.Screen
                      name='GradeDetails'
                      component={GradeScreen}
                    />
                    <this.navigator.Screen
                      name='SubjectDetails'
                      component={SubjectScreen}
                    />
                  </this.navigator.Navigator>
                </View>
              }
        </Context.CurrentUser.Provider>
        </Context.Language.Provider>
        </Context.Scheme.Provider>
      </NavigationContainer>
    );
  }
}
