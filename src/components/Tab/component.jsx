import {useSelector} from 'react-redux';
import {Button} from '../Button/component.jsx';
import { selectRestaurantById} from '../../redux/entities/restaurant/selectors.js';
import styles from './styles.module.css';
import {Link, useParams} from 'react-router-dom';

export const Tab = ({id}) => {
    const {restaurantId} = useParams();
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, id)
    );

    return(
        <Link to={id}>
            <Button
                type="button"
                text={restaurant.name}
                disabled={false}
                active={id === restaurantId ? id : null}
                size="m"
                styleName="tab"
                className={styles.tab}
            />
        </Link>)
}