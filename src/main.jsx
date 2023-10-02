import React from 'react';
import ReactDOM from 'react-dom/client';
import {MainPage} from './pages/Main/component.jsx';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(<MainPage />);