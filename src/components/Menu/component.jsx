import {Dish} from '../Dish/component.jsx';
import styles from './styles.module.css';

export const Menu = ({menu}) => {
    console.log('menu', menu)

    return (
        <ul className={styles.menu}>
            {menu.map((dish) =>
                <li key={dish.id}>
                    <Dish dish={dish} className={styles.dish}/>
                </li>)}
        </ul>
    )
}
