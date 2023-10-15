import {useState} from 'react';
import {createPortal} from 'react-dom';
import {Menu} from '../Menu/component.jsx';
import {Reviews} from '../Reviews/component.jsx';
import {ReviewForm} from '../ReviewForm/component.jsx';
import {Button} from '../Button/component.jsx';
import styles from './styles.module.css';

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
                styleName="defaultBtn"
                size="l"
                disabled={false}
                onClick={() => setIsModalOpen(true)}
            />
            { isModalOpen && createPortal( <ReviewForm setIsModalOpen={setIsModalOpen} />, document.getElementById('modal'))}
        </div>
    )
}
