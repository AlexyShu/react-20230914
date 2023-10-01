import {Dish} from '../Dish/component.jsx';
import styles from './styles.module.css';

export const Menu = ({menu}) => {
    return (
        <ul className={styles.menu}>
            { menu.map(({ name, id }) => <Dish key={id} name={name} />) }
        </ul>
    )
}
