import {restaurants} from '../../constants/mocks.js';
import {useState} from 'react';
import {Restaurant} from '../../components/Restaurant/component.jsx';
import {Tabs} from '../../components/Tabs/component.jsx'

export const MainPage = () => {
    const [activeRestaurantId, setActiveRestaurant] = useState(restaurants[0].id);

    return (
        <div>
            <Tabs restaurants={restaurants} setActiveRestaurant={setActiveRestaurant} />
            <Restaurant restaurant={restaurants.find(restaurant => restaurant.id === activeRestaurantId )} />
        </div>)
}