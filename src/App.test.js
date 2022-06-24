import React from "react";
import ReactDOM from "react-dom";
import App from './App';
import '@testing-library/jest-dom'
import store from "./redux/redux-store";
import {Provider} from "react-redux";


it('renders learn react link', () => {
  const div = document.createElement('div');
  ReactDOM.render(
      <Provider store={store}>
      <App />
      </Provider>, div);
  ReactDOM.unmountComponentAtNode(div)
});
