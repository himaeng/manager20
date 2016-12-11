// manager/src/App.js
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import RouterComponent from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyCeCxo2ogwzvsxf_wFYfl2ylrBDgvTH4qQ',
      authDomain: 'manager-994f1.firebaseapp.com',
      databaseURL: 'https://manager-994f1.firebaseio.com',
      storageBucket: 'manager-994f1.appspot.com',
      messagingSenderId: '1004620360764'
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <RouterComponent />
      </Provider>
    );
  }
}

export default App;
