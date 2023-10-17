import {useState} from 'react';
import {RestaurantContainer} from '../../components/Restaurant/container.jsx';
import {Layout} from '../../components/Layout/component.jsx';
import {TabsContainer} from '../../components/Tabs/container.jsx';

export const MainPage = () => {
    const [activeRestaurantId, setActiveRestaurant] = useState();

    return (
        <Layout>
            <TabsContainer setActiveRestaurant={setActiveRestaurant} activeRestaurantId={activeRestaurantId}/>
            {activeRestaurantId ? (
                <RestaurantContainer restaurantId={activeRestaurantId} />
            ) : <div>Нажмите на название ресторана, для выбора.</div>}
        </Layout>)
}