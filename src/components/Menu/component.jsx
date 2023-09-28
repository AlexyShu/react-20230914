import {MenuItem} from '../MenuItem/component.jsx';

export const Menu = ({menu}) => {
    return (
        <ul>
            { menu.map(({ name }) => <MenuItem name={name} />) }
        </ul>
    )
}
