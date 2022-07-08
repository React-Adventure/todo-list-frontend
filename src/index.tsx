import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App';
import './styles/index.scss';

const root = createRoot(document.getElementById('root'));

root.render(<App />);

// eslint-disable-next-line max-len
if (!new class { x: Array<number>; }().hasOwnProperty('x')) throw new Error('Transpiler is not configured correctly');
