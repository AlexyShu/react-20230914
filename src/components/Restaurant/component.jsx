import {Menu} from '../Menu/component.jsx';
import {Rewiews} from '../Reviews/component.jsx';

export const Restaurant = ({restaurant}) => {
    return (
        <div>
            <h3>{restaurant.name}</h3>
            <h4>Меню:</h4>
            <Menu menu={restaurant.menu} />
            <h5>Отзывы:</h5>
            <Rewiews reviews={restaurant.reviews} />
        </div>
    )
}
