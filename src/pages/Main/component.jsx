import {useState} from 'react';
import {useSelector} from 'react-redux';
import {Restaurant} from '../../components/Restaurant/component.jsx';
import {Tabs} from '../../components/Tabs/component.jsx'
import {Layout} from '../../components/Layout/component.jsx';

export const MainPage = () => {
    const restaurantIds = useSelector((state) => state.restaurant.ids);
    const restaurants = useSelector(state => state.restaurant.entities);
    const [activeRestaurantId, setActiveRestaurant] = useState(restaurantIds[0]);

    return (
        <Layout>
            <Tabs restaurants={restaurants} setActiveRestaurant={setActiveRestaurant} activeRestaurantId={activeRestaurantId}/>
            <Restaurant restaurant={restaurants[activeRestaurantId]} />
        </Layout>)
}