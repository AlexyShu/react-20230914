import {Menu} from '../Menu/component.jsx';
import {Reviews} from '../Reviews/component.jsx';
import styles from './styles.module.css';
import {ReviewForm} from '../ReviewForm/component.jsx';
import {Button} from '../Button/component.jsx';
import {createPortal} from 'react-dom';
import {useState} from 'react';

export const Restaurant = ({restaurant}) => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <div>
            <h3 className={styles.restaurantName}>{restaurant.name}</h3>
            <h4>Меню:</h4>
            <Menu menu={restaurant.menu} />
            <h5>Отзывы:</h5>
            <Reviews reviews={restaurant.reviews} />
            <Button
                type={'button'}
                text={'Оставить отзыв'}
                styleName="bigBtn"
                disabled={false}
                onClick={() => setIsModalOpen(true)}
            />
            { isModalOpen && createPortal( <ReviewForm setIsModalOpen={setIsModalOpen} />, document.getElementById('modal'))}
        </div>
    )
}
