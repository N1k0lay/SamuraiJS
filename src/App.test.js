import React from "react";
import ReactDOM from "react-dom";
import SamuraiJSApp from './App';
import '@testing-library/jest-dom'

it('renders learn react link', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <SamuraiJSApp />, div);
    ReactDOM.unmountComponentAtNode(div)
});
