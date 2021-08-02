import React from 'react';
import App from './components/App';

const AppContainer = () => {
  const props = {
    message: 'Hello World',
  };
  return <App {...props} />;
};

export default AppContainer;
