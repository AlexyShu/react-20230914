import { useSelector } from 'react-redux';
import { User } from './component';
import { selectUserById } from '../../redux/entities/user/selector';

export const UserContainer = ({ userId }) => {
    const user = useSelector((state) => selectUserById(state, userId));
    return <User user={user} />;
};