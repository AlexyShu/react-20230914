import { Provider } from 'react-redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {ButtonsColorProvider} from './contexts/ButtonsColor.jsx';
import { MainPage } from './pages/Main/component';
import {RestaurantContainer} from './components/Restaurant/container.jsx';
import {HomePage} from './pages/HomePage/component.jsx';
import store from './redux';

export const App = () => {
    return (
        <Provider store={store}>
            <ButtonsColorProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<HomePage />} />
                        <Route path="restaurants" element={<MainPage />}>
                            <Route index element={<div>Нажмите на название интересующего Вас ресторана</div>} />
                            <Route path=":restaurantId" element={<RestaurantContainer />} />
                        </Route>
                        <Route path="*" element={<div>Not Found</div>} />
                    </Routes>
                </BrowserRouter>
            </ButtonsColorProvider>
        </Provider>
    );
};