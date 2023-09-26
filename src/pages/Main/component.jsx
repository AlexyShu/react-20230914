import {restaurants} from '../../constants/mocks.js';
import {Button} from '../../components/Button/component.jsx';
import {useState} from 'react';
import {Card} from '../../components/Card/component.jsx';

export const MainPage = () => {
    const [activeRestaurant, setActiveRestaurant] = useState(restaurants[0].name);

    return (
        <div>
            <div>
                { restaurants.map(({ name }) => <Button text={name} onClick={() => setActiveRestaurant(name)} disabled={false} />) }
            </div>
            <div>
                { restaurants.map(restaurant => <Card activeRestaurant={activeRestaurant} restaurant={restaurant} />) }
            </div>
        </div>)
}