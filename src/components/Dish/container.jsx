import {selectDishById} from '../../redux/entities/dish/selectors.js';
import { Dish } from './component';
import {useSelector} from 'react-redux';

export const DishContainer = ({ dishId, className }) => {
    const dish = useSelector((state) => selectDishById(state, dishId));

    if (!dish) {
        return null;
    }

    return <Dish dish={dish} className={className} />
};