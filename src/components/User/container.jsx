import { User } from './component';
import {useGetUsersQuery} from "../../redux/services/api.js";

export const UserContainer = ({ userId }) => {
    const { data, isFetching } = useGetUsersQuery();

    return (
        <>
            {isFetching ? <div></div> : <User user={data.find(user => user.id === userId)}/>}
        </>
    )
};