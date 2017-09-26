import React from 'react';
import ReactDOM from 'react-dom';
import PokeContainer from './containers/PokeContainer'

window.onload = function () {
  ReactDOM.render(
    <PokeContainer />,
    document.getElementById('app')
  );
};
