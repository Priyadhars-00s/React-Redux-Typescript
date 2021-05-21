import "./App.css";
import React from "react";
import Routes from './Router'
import { Provider } from "react-redux";
import store from "./components/Redux/Stores";
 const App: React.FC = (): JSX.Element => {
  return (
  <Provider store={store}>
    <Routes />
  </Provider>
  
);
  };
  export default App;
