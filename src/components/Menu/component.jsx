import {useSelector} from 'react-redux';
import {DishContainer} from '../Dish/container.jsx';
import styles from './styles.module.css';

export const Menu = ({menu}) => {
    const dishes = useSelector(state => state.dish.entities);

    return (
        <ul className={styles.menu}>
            { menu.map((id) =>
                <li key={dishes[id].id}>
                    <DishContainer dishId={id} className={styles.dish} />
                </li>) }
        </ul>
    )
}
