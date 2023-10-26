import {useState} from 'react';
import {createPortal} from 'react-dom';
import {ReviewForm} from '../ReviewForm/component.jsx';
import {Button} from '../Button/component.jsx';
import styles from './styles.module.css';
import {MenuContainer} from '../Menu/container.jsx';
import {ReviewsContainer} from '../Reviews/container.jsx';

export const Restaurant = ({restaurant}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div>
            <h3 className={styles.restaurantName}>{restaurant.name}</h3>
            <h4>Меню:</h4>
            <MenuContainer restaurantId={restaurant.id} />
            <h5>Отзывы:</h5>
            <ReviewsContainer restaurantId={restaurant.id} />
            <Button
                type={'button'}
                text={'Оставить отзыв'}
                styleName="defaultBtn"
                size="l"
                disabled={false}
                onClick={() => setIsModalOpen(true)}
            />
            { isModalOpen && createPortal( <ReviewForm setIsModalOpen={setIsModalOpen} />, document.getElementById('modal'))}
        </div>
    )
}
