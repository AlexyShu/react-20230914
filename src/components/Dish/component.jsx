import {Button} from '../Button/component.jsx';
import {useState} from 'react';
import styles from './styles.module.css'

export const Dish = ({name}) => {
    const [amount, setAmount] = useState(0);

    return (
        <div className="dish">
            <div className={styles.dishName}>{name}</div>
            <Button
                text={'-'}
                onClick={() => setAmount(amount - 1)}
                styleName="btn"
                disabled={amount <= 0}
            />
            <span className={styles.amount}>{amount}</span>
            <Button
                text={'+'}
                onClick={() => setAmount(amount + 1)}
                styleName="btn"
                disabled={amount >= 5}
            />
        </div>
    )
}