import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {selectRestaurantById, selectRestaurantLoadingStatus} from '../../redux/entities/restaurant/selectors.js';
import {Restaurant} from './component.jsx';
import {getRestaurants} from '../../redux/entities/restaurant/thunks/get-restaurants.js';
import {REQUEST_STATUS} from '../../constants/statuses.js';

export const RestaurantContainer = ({restaurantId}) => {
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, restaurantId)
    );

    const loadingStatus = useSelector(selectRestaurantLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants())
    }, []);


    if (!restaurant) {
        return null;
    }

    return (
        <>
            {loadingStatus === REQUEST_STATUS.pending ?
                <div>Loading...</div> : <Restaurant restaurant={restaurant} />}
        </>)
}