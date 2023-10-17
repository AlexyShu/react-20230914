import {ReviewContainer} from '../Review/container.jsx';
import styles from './styles.module.css'

export const Reviews = ({reviewIds}) => {
    return (<ul className={styles.list}>
        { reviewIds.map((id) =>
            <li key={id}>
                <ReviewContainer reviewId={id} />
            </li>)
        }
    </ul>)
}