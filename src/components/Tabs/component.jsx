import {Button} from '../Button/component.jsx';

export const Tabs = ({restaurants, setActiveRestaurant}) => {
    return(
        <div>
            { restaurants.map(({ name, id }) => <Button text={name} onClick={() => setActiveRestaurant(id)} disabled={false} />) }
        </div>)
}