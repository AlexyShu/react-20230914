import { Provider } from 'react-redux';
import {ButtonsColorProvider} from './contexts/ButtonsColor.jsx';
import { MainPage } from './pages/Main/component';

import store from './redux';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {RestaurantContainer} from './components/Restaurant/container.jsx';

export const App = () => {
    return (
        <Provider store={store}>
            <ButtonsColorProvider>
                <BrowserRouter>
                    <Routes>
                        <Route index element={<div>Home page</div>} />
                        <Route path="restaurants" element={<MainPage />}>
                            <Route index element={<div>Select product</div>} />
                            <Route path=":restaurantId" element={<RestaurantContainer />} />
                        </Route>
                        <Route path="*" element={<div>Not Found</div>} />
                    </Routes>
                </BrowserRouter>
            </ButtonsColorProvider>
        </Provider>
    );
};