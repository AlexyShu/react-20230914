import {restaurants} from '../../constants/mocks.js';
import {useState} from 'react';
import {Restaurant} from '../../components/Restaurant/component.jsx';
import {Tabs} from '../../components/Tabs/component.jsx'
import {Layout} from '../../components/Layout/component.jsx';

export const MainPage = () => {
    const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

    return (
        <Layout>
            <Tabs restaurants={restaurants} setActiveRestaurant={setActiveRestaurant} activeRestaurantId={activeRestaurantId}/>
            <Restaurant restaurant={restaurants.find(restaurant => restaurant.id === activeRestaurantId )} />
        </Layout>)
}