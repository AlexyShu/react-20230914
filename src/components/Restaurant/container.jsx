import {useSelector} from 'react-redux';
import {selectRestaurantById} from '../../redux/entities/restaurant/selectors.js';
import {Restaurant} from './component.jsx';

export const RestaurantContainer = ({restaurantId}) => {
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    if (!restaurant) {
        return null;
    }

    return <Restaurant restaurant={restaurant} />
}