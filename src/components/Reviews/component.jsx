import styles from './styles.module.css';
import {useSelector} from 'react-redux';

export const Reviews = ({reviewIds}) => {
    const reviews = useSelector(state => state.review.entities);
    const users = useSelector(state => state.user.entities);

    return (<ul className={styles.list}>
        { reviewIds.map((id) =>
            <li key={id}>
                <span className={styles.user}>{users[reviews[id].userId].name} : </span>
                <span>{reviews[id].text}</span>
            </li>)
        }
    </ul>)
}