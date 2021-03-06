// /**
//  * @format
//  */

// import {AppRegistry} from 'react-native';
// import App from './App';
// import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => App);

// Step 1! Import library to help create a component
import React from 'react';
import {AppRegistry} from 'react-native';
import Header from './src/components/header'

// Step 2! Create component
const App = () => (
    <Header />
)

//Step 3! Render it to the device
AppRegistry.registerComponent('albums', () => App);
