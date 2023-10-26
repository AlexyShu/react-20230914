import {useSelector} from 'react-redux';
import {selectRestaurantMenuById} from '../../redux/entities/restaurant/selectors.js';
import {getDishes} from '../../redux/entities/dish/thunks/get-dish.js';
import {useRequest} from '../../hooks/use-request.js';
import {REQUEST_STATUS} from '../../constants/statuses.js';
import {Menu} from './component.jsx';

export const MenuContainer = ({restaurantId}) => {
    const menu = useSelector(state => selectRestaurantMenuById(state, restaurantId));
    const dishesLoadingStatus = useRequest(getDishes, restaurantId);

    if (
        dishesLoadingStatus === REQUEST_STATUS.loading
    ) {
        return <div>Loading...</div>;
    }

    return <Menu menu={menu} />
}