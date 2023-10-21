import {useState} from 'react';
import {useSelector} from 'react-redux';
import {RestaurantContainer} from '../../components/Restaurant/container.jsx';
import {Layout} from '../../components/Layout/component.jsx';
import {TabsContainer} from '../../components/Tabs/container.jsx';
import {selectRestaurantIds} from '../../redux/entities/restaurant/selectors.js';

export const MainPage = () => {
    const restaurantIds = useSelector((state) =>
        selectRestaurantIds(state)
    );
    const [activeRestaurantId, setActiveRestaurant] = useState(restaurantIds[0]);

    return (
        <Layout>
            <TabsContainer setActiveRestaurant={setActiveRestaurant} activeRestaurantId={activeRestaurantId}/>
            {activeRestaurantId && (
                <RestaurantContainer restaurantId={activeRestaurantId} />
            )}
        </Layout>)
}