import {MenuItem} from '../MenuItem/component.jsx';
import styles from './styles.module.css';

export const Menu = ({menu}) => {
    return (
        <ul className={styles.menu}>
            { menu.map(({ name, id }) => <MenuItem key={id} name={name} />) }
        </ul>
    )
}
