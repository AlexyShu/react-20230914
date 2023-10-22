import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {RestaurantContainer} from '../../components/Restaurant/container.jsx';
import {Layout} from '../../components/Layout/component.jsx';
import {TabsContainer} from '../../components/Tabs/container.jsx';
import {getRestaurants} from '../../redux/entities/restaurant/thunks/get-restaurants.js';

export const MainPage = () => {
    const dispatch = useDispatch();
    const [activeRestaurantId, setActiveRestaurant] = useState();

    useEffect( () => {
        dispatch((getRestaurants()));
    }, []);

    return (
        <Layout>
            <TabsContainer setActiveRestaurant={setActiveRestaurant} activeRestaurantId={activeRestaurantId}/>
            {activeRestaurantId ?
                <RestaurantContainer restaurantId={activeRestaurantId} />
                : <div>Нажмите на название ресторана, для выбора.</div>
                }
        </Layout>)
}