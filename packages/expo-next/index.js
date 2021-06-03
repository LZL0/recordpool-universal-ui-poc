import 'expo/build/Expo.fx';
import { activateKeepAwake } from 'expo-keep-awake';
import registerRootComponent from 'expo/build/launch/registerRootComponent';

import App from './App';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(App);
