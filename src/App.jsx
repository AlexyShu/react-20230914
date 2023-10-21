import { Provider } from 'react-redux';
import {ButtonsColorProvider} from './contexts/ButtonsColor.jsx';
import { MainPage } from './pages/Main/component';

import store from './redux';

export const App = () => {
    return (
        <Provider store={store}>
            <ButtonsColorProvider>
                <MainPage />
            </ButtonsColorProvider>
        </Provider>
    );
};