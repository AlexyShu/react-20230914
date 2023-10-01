import {Menu} from '../Menu/component.jsx';
import {Reviews} from '../Reviews/component.jsx';
import styles from './styles.module.css';

export const Restaurant = ({restaurant}) => {
    return (
        <div>
            <h3 className={styles.restaurantName}>{restaurant.name}</h3>
            <h4>Меню:</h4>
            <Menu menu={restaurant.menu} />
            <h5>Отзывы:</h5>
            <Reviews reviews={restaurant.reviews} />
        </div>
    )
}
