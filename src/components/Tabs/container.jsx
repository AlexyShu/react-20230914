import { useSelector} from 'react-redux';
import {selectRestaurantIds} from '../../redux/entities/restaurant/selectors.js';
import {Tabs} from './component.jsx';
import {useRestaurantsQuery} from '../../redux/services/api.js';



export const TabsContainer = (props) => {
    // --thunks--
    const restaurantIds = useSelector(selectRestaurantIds);

   // const { data, isFetching } = useRestaurantsQuery();

    return <Tabs {...props} restaurantIds={restaurantIds} />
};