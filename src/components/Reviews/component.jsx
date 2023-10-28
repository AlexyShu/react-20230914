import {Review} from '../Review/component.jsx';
import styles from './styles.module.css'

export const Reviews = ({reviews}) => {
    return (<ul className={styles.list}>
        { reviews.map((review) =>
            <li key={review.id}>
                <Review review={review} />
            </li>)
        }
    </ul>)
}