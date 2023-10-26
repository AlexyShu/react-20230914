import {useDispatch, useSelector} from 'react-redux';
import {Button} from '../Button/component.jsx';
import {cartActions} from '../../redux/ui/cart/index.js';
import {selectDishAmountById} from '../../redux/ui/cart/selectors.js';
import styles from './styles.module.css'

export const Dish = ({dish, className}) => {
    const dispatch = useDispatch();
    const amount = useSelector((state) =>
        selectDishAmountById(state, dish.id)
    );

    return (
        <div className={className}>
            <div className={styles.dishName}>{dish.name}</div>
            <Button
                text={'-'}
                type={'button'}
                onClick={() => dispatch(cartActions.decrement(dish.id))}
                styleName="roundBtn"
                disabled={amount <= 0}
                size="s"
            />
            <span className={styles.amount}>{amount}</span>
            <Button
                text={'+'}
                type={'button'}
                onClick={() => dispatch(cartActions.increment(dish.id))}
                styleName="roundBtn"
                disabled={amount >= 5}
                size="s"
            />
        </div>
    )
}