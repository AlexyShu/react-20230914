import {useSelector} from 'react-redux';
import {Button} from '../Button/component.jsx';
import { selectRestaurantById} from '../../redux/entities/restaurant/selectors.js';
import styles from './styles.module.css';

export const Tab = ({id, setActiveRestaurant, activeRestaurantId}) => {
    const restaurant = useSelector((state) =>
        selectRestaurantById(state, id)
    );

    return(
        <Button
            type="button"
            text={restaurant.name}
            onClick={() => setActiveRestaurant(id)}
            disabled={false}
            active={id === activeRestaurantId ?? null}
            size="m"
            styleName="tab"
            className={styles.tab}
        />)
}