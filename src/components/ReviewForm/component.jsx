import {useReducer} from 'react';
import {Button} from '../Button/component.jsx';
import styles from './styles.module.css';
import {useDispatch} from 'react-redux';
import {createReview} from '../../redux/entities/review/thunks/create-review.js';

const DEFAULT_VALUE = {
    userId: 'a304959a-76c0-4b34-954a-b38dbf310360',
    text: '',
    rating: 0,
};

const reducer = (state, action) => {
    switch (action?.type) {
        case 'setText':
            return { ...state, text: action.payload };
        case 'setRating':
            return { ...state, rating: action.payload };
        case 'reset':
            return { ...DEFAULT_VALUE };
        default:
            return state;
    }
};

export const ReviewForm = ({setIsModalOpen, restaurantId}) => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);
    const dispatchCreateReview = useDispatch();

    const onSubmit = () => {
        dispatchCreateReview(createReview({restaurantId, newReview: formValue}));
    }

    return (
        <form onSubmit={(event) => {
                event.preventDefault();
                onSubmit();
                dispatch({type: 'reset'});
                setIsModalOpen(false)
             }}
             className={styles.form}
        >
            <div className={styles.titleWrap}>
                <h4 className={styles.title}>Оставьте отзыв:</h4>
                <button className={styles.closeBtn} type="button"  onClick={() => setIsModalOpen(false)}>close</button>
            </div>
            <label className={styles.field}>Текст:</label>
            <input
                className={styles.input}
                type={'text'}
                value={formValue.text}
                onChange={(event) =>
                    dispatch({ type: 'setText', payload: event.target.value})
                }
            />
            <label className={styles.field}>Рейтинг:</label>
            <input
                className={styles.input}
                type={'number'}
                value={formValue.rating}
                onChange={(event) =>
                    dispatch({ type: 'setRating', payload: event.target.value})
                }
            />
            <Button
                type={'submit'}
                text={'Сохранить'}
                styleName="defaultBtn"
                size="l"
                disabled={false}
            />
        </form>
    )
}