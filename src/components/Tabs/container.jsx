import { useSelector} from 'react-redux';
import {selectRestaurantIds} from '../../redux/entities/restaurant/selectors.js';
import {Tabs} from './component.jsx';


export const TabsContainer = (props) => {
    const restaurantIds = useSelector(selectRestaurantIds);

    return <Tabs {...props} restaurantIds={restaurantIds} />
};