import 'react-native-gesture-handler';
import { registerRootComponent } from 'expo';
import React from 'react';
import Toast from 'react-native-toast-message';
import { MyContextProvider } from './src/context';

import App from './App';

const provider = () => {
    return(
        <MyContextProvider>
            <App/>
            <Toast/>
        </MyContextProvider>
    )
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(provider);
