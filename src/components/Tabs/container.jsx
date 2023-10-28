import {Tabs} from './component.jsx';
import {useGetRestaurantsQuery} from '../../redux/services/api.js';

export const TabsContainer = (props) => {
   const { data, isFetching  } = useGetRestaurantsQuery();

    return (
        <>
            {isFetching ?
                <div>Loading</div> :
                <Tabs {...props} restaurantIds={data?.map(restaurant => restaurant.id)} />}
        </>)
};