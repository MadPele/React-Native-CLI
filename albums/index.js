// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// Step 1! Import library to help create a component
import React from 'react';
import ReactNative, {Text} from 'react-native';

// Step 2! Create component
const App = () => {
    return (
        <Text>Some text</Text>
    );
};

//Step 3! Render it to the device
ReactNative.AppRegistry.registerComponent('abums', () => App);
