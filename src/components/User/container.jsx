import {useDispatch, useSelector} from 'react-redux';
import { User } from './component';
import {useEffect} from 'react';
import {selectUserById, selectUserLoadingStatus} from '../../redux/entities/user/selector';
import {getUsers} from '../../redux/entities/user/thunks/get-users.js';
import {REQUEST_STATUS} from '../../constants/statuses.js';

export const UserContainer = ({ userId }) => {
    const user = useSelector((state) => selectUserById(state, userId));
    const loadingStatus = useSelector(selectUserLoadingStatus);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getUsers())
    }, []);

    return (
    <>
        {loadingStatus === REQUEST_STATUS.pending ?
            <div>Loading...</div> : <User user={user}/>}
    </>)
};