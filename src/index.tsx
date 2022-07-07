import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/index.scss';

if (!new class { x: Array<number>; }().hasOwnProperty('x')) throw new Error('Transpiler is not configured correctly');

ReactDOM.render(<App />, document.getElementById('root'));
