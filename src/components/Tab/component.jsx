import {Link, useParams} from 'react-router-dom';
import {Button} from '../Button/component.jsx';
import styles from './styles.module.css';

export const Tab = ({restaurant}) => {
    const {restaurantId} = useParams();
    let activeRestaurantId = restaurantId ?? 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2';

    return(
        <Link to={restaurant.id}>
            <Button
                type="button"
                text={restaurant.name}
                disabled={false}
                active={restaurant.id === activeRestaurantId ? restaurant.id : null}
                size="m"
                styleName="tab"
                className={styles.tab}
            />
        </Link>)
}