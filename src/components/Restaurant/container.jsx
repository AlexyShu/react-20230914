import {useParams} from 'react-router-dom';
import {Restaurant} from './component.jsx';
import {useGetRestaurantsQuery} from '../../redux/services/api.js';

export const RestaurantContainer = () => {
    const { restaurantId } = useParams();
    let activeRestaurantId = restaurantId ?? 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2';
    const { data, isFetching } = useGetRestaurantsQuery();

    return (
        <>
            {isFetching ? <div></div> :
                <Restaurant restaurant={data?.find(restaurant => restaurant.id === activeRestaurantId)} />}
        </>)
}