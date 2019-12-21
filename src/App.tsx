import React from 'react';
import './App.scss';
import { Routes } from 'routes';
import { Provider } from 'react-redux';
import configureStore from 'store/store/configStore';

const App: React.FC = () => {
  const store = configureStore();
  const app = (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
  return app;
};

export default App;
