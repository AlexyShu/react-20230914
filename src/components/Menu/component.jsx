import {Dish} from '../Dish/component.jsx';
import styles from './styles.module.css';

export const Menu = ({menu}) => {
    return (
        <ul className={styles.menu}>
            { menu.map(({ name, id }) =>
                <li key={id}>
                    <Dish name={name} className={styles.dish} />
                </li>) }
        </ul>
    )
}
