import {useState} from 'react';
import {Button} from '../Button/component.jsx';
import styles from './styles.module.css'

export const Dish = ({name, className}) => {
    const [amount, setAmount] = useState(0);

    return (
        <div className={className}>
            <div className={styles.dishName}>{name}</div>
            <Button
                text={'-'}
                type={'button'}
                onClick={() => setAmount(amount - 1)}
                styleName="roundBtn"
                disabled={amount <= 0}
                size="s"
            />
            <span className={styles.amount}>{amount}</span>
            <Button
                text={'+'}
                type={'button'}
                onClick={() => setAmount(amount + 1)}
                styleName="roundBtn"
                disabled={amount >= 5}
                size="s"
            />
        </div>
    )
}