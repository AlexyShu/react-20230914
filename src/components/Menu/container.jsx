import {Menu} from './component.jsx';
import {useGetDishesQuery} from '../../redux/services/api.js';

export const MenuContainer = ({restaurantId}) => {
    const { data, isFetching } = useGetDishesQuery(restaurantId);

    return (
        <>
            {isFetching ? <div>Loading...</div> : <Menu menu={data} />}
        </>)
}