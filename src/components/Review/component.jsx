import {UserContainer} from '../User/container.jsx';
export const Review = ({review}) => {
    return (
        <div>
            <UserContainer userId={review.userId} />
            <span>{review.text}</span>
        </div>)
}