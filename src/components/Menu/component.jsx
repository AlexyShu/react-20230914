import {Dish} from '../Dish/component.jsx';

export const Menu = ({menu}) => {
    return (
        <ul>
            { menu.map(({ name }) => <Dish name={name} />) }
        </ul>
    )
}
