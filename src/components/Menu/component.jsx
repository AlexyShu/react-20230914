import {Dish} from '../Dish/component.jsx';
import styles from './styles.module.css';
import {useSelector} from 'react-redux';

export const Menu = ({menu}) => {
    const dishes = useSelector(state => state.dish.entities);

    return (
        <ul className={styles.menu}>
            { menu.map((id) =>
                <li key={dishes[id].id}>
                    <Dish name={dishes[id].name} className={styles.dish} />
                </li>) }
        </ul>
    )
}
