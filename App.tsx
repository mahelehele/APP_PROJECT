import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer, DefaultTheme, DarkTheme, Theme } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import RootNavigator from './src/navigation/RootNavigator';
import { useColorScheme } from 'react-native';
import { ThemeProvider, useThemeController } from './src/theme/useTheme';

function AppContainer() {
  const scheme = useColorScheme();
  const { theme } = useThemeController();
  const navTheme: Theme = theme === 'system'
    ? (scheme === 'dark' ? DarkTheme : DefaultTheme)
    : (theme === 'dark' ? DarkTheme : DefaultTheme);

  return (
    <NavigationContainer theme={navTheme}>
      <RootNavigator />
      <StatusBar style={navTheme === DarkTheme ? 'light' : 'dark'} />
    </NavigationContainer>
  );
}

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider>
        <AppContainer />
      </ThemeProvider>
    </SafeAreaProvider>
  );
}
