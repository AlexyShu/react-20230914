import React from 'react';
import ReactDOM from 'react-dom/client';
import {MainPage} from './pages/Main/component.jsx';
import {Header} from './components/Header/component.jsx';
import {Footer} from './components/Footer/component.jsx';
import './index.css';
import {ButtonsColorProvider} from './contexts/ButtonsColor.jsx';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <ButtonsColorProvider>
        <Header />
        <MainPage />
        <Footer />
    </ButtonsColorProvider>
);