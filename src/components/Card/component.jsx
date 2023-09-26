import {MenuItem} from '../MenuItem/component.jsx';

export const Card = ({restaurant, activeRestaurant}) => {
    return (
    <>
        {activeRestaurant === restaurant.name ?
            <div>
                <h3>{restaurant.name}</h3>
                <h4>Меню:</h4>
                <ul>
                    { restaurant.menu.map(({ name }) => <MenuItem name={name} />) }
                </ul>
                <h5>Отзывы:</h5>
                <ul>
                    { restaurant.reviews.map(({ user, text }) => <li>{user}: {text}</li>) }
                </ul>
            </div> : null}
    </>)
}
