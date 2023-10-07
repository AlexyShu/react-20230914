import {Button} from '../Button/component.jsx';
import styles from './styles.module.css'
import {useState} from 'react';

export const Dish = ({name}) => {
    const [amount, setAmount] = useState(0);

    return (
        <li className={styles.dish}>
            <div className={styles.dishName}>{name}</div>
            <Button
                text={'-'}
                type={'button'}
                onClick={() => setAmount(amount - 1)}
                styleName="btn"
                disabled={amount <= 0}
            />
            <span className={styles.amount}>{amount}</span>
            <Button
                text={'+'}
                type={'button'}
                onClick={() => setAmount(amount + 1)}
                styleName="btn"
                disabled={amount >= 5}
            />
        </li>
    )
}