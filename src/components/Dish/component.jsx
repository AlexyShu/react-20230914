import {Button} from '../Button/component.jsx';
import {useState} from 'react';

export const Dish = ({name}) => {
    const [amount, setAmount] = useState(0);

    return (
        <li>
            <div>{name}</div>
            <Button text={'-'} onClick={() => setAmount(amount - 1)} disabled={amount <= 0} />
            <span>{amount}</span>
            <Button text={'+'} onClick={() => setAmount(amount + 1)} disabled={amount >= 5} />
        </li>
    )
}