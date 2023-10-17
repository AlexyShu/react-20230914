import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {selectRestaurantIds, selectRestaurantLoadingStatus} from '../../redux/entities/restaurant/selectors.js';
import {Tabs} from './component.jsx';
import {getRestaurants} from '../../redux/entities/restaurant/thunks/get-restaurants.js';
import {REQUEST_STATUS} from '../../constants/statuses.js';

export const TabsContainer = (props) => {
    const restaurantIds = useSelector(selectRestaurantIds);
    const loadingStatus = useSelector(selectRestaurantLoadingStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getRestaurants())
    }, []);
    
    return (
        <>
            {loadingStatus === REQUEST_STATUS.pending ?
                <div>Loading...</div> : <Tabs {...props} restaurantIds={restaurantIds} />}
       </>)
};