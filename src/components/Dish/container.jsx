import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {selectDishById, selectDishLoadingStatus} from '../../redux/entities/dish/selector';
import { Dish } from './component';
import {getDishes} from '../../redux/entities/dish/thunks/get-dish.js';
import {REQUEST_STATUS} from '../../constants/statuses.js';

export const DishContainer = ({ dishId, className }) => {
    const dish = useSelector((state) => selectDishById(state, dishId));
    const loadingStatus = useSelector(selectDishLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getDishes())
    }, []);

    if (!dish) {
        return null;
    }

    return (
        <>
            {loadingStatus === REQUEST_STATUS.pending ?
                <div>Loading...</div> : <Dish dish={dish} className={className} />}
        </>)
};