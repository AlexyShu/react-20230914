import {Button} from '../Button/component.jsx';
import {useContext, useState} from 'react';
import styles from './styles.module.css'
import {ButtonsContext} from '../../contexts/ButtonsColor.jsx';

export const Dish = ({name}) => {
    const [amount, setAmount] = useState(0);
    const { color } = useContext(ButtonsContext);


    return (
        <li className={styles.dish}>
            <div className={styles.dishName}>{name}</div>
            <Button
                text={'-'}
                type={'button'}
                onClick={() => setAmount(amount - 1)}
                styleName="btn"
                disabled={amount <= 0}
                theme={color}
            />
            <span className={styles.amount}>{amount}</span>
            <Button
                text={'+'}
                type={'button'}
                onClick={() => setAmount(amount + 1)}
                styleName="btn"
                disabled={amount >= 5}
                theme={color}
            />
        </li>
    )
}