import {Menu} from './component.jsx';
import {useDispatch, useSelector} from 'react-redux';
import {selectRestaurantMenuById} from '../../redux/entities/restaurant/selectors.js';
import {useEffect} from 'react';
import {getDishes} from '../../redux/entities/dish/thunks/get-dish.js';

export const MenuContainer = ({restaurantId}) => {
    const dispatch = useDispatch();
    const menu = useSelector(state => selectRestaurantMenuById(state, restaurantId));

    useEffect(() => {
        dispatch(getDishes(restaurantId));
    }, [restaurantId]);

    return <Menu menu={menu} />
}