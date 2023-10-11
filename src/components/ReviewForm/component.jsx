import {useReducer} from 'react';
import {Button} from '../Button/component.jsx';
import styles from './styles.module.css';

const DEFAULT_VALUE = {
    name: '',
    text: '',
    rating: 0,
};

const reducer = (state, action) => {
    switch (action?.type) {
        case 'setName':
            return { ...state, name: action.payload };
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

export const ReviewForm = ({setIsModalOpen}) => {
    const [formValue, dispatch] = useReducer(reducer, DEFAULT_VALUE);

    return (
        <form onSubmit={() => dispatch({ type: 'reset' })} className={styles.form}>
            <div className={styles.titleWrap}>
                <h4 className={styles.title}>Оставьте отзыв:</h4>
                <button className={styles.closeBtn} type="button"  onClick={() => setIsModalOpen(false)}>close</button>
            </div>
            <label className={styles.field}>Имя:</label>
            <input
                className={styles.input}
                type={'text'}
                value={formValue.name}
                onChange={(event) =>
                    dispatch({type: 'setName', payload: event.target.value})
                }
            />
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