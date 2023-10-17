import {DishContainer} from '../Dish/container.jsx';
import styles from './styles.module.css';

export const Menu = ({menu}) => {

    return (
        <ul className={styles.menu}>
            {menu.map((id) =>
                <li key={id}>
                    <DishContainer dishId={id} className={styles.dish}/>
                </li>)}
        </ul>
    )
}
