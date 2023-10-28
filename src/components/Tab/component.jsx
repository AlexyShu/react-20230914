import {Link, useParams} from 'react-router-dom';
import {Button} from '../Button/component.jsx';
import {useGetRestaurantsQuery} from '../../redux/services/api.js';
import styles from './styles.module.css';

export const Tab = ({id}) => {
    const {restaurantId} = useParams();
    let activeRestaurantId = restaurantId ?? 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2';
    const { data } = useGetRestaurantsQuery();

    return(
        <Link to={id}>
            <Button
                type="button"
                text={data?.find(restaurant => restaurant.id === activeRestaurantId).name}
                disabled={false}
                active={id === activeRestaurantId ? id : null}
                size="m"
                styleName="tab"
                className={styles.tab}
            />
        </Link>)
}