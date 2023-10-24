import {useSelector} from 'react-redux';
import {selectRestaurantReviewsById} from '../../redux/entities/restaurant/selectors.js';
import {getReviews} from '../../redux/entities/review/thunks/get-reviews.js';
import {Reviews} from './component.jsx';
import {getUsers} from '../../redux/entities/user/thunks/get-users.js';
import {REQUEST_STATUS} from '../../constants/statuses.js';
import {useRequest} from '../../hooks/use-request.js';

export const ReviewsContainer = ({restaurantId}) => {
    const reviews = useSelector((state) => selectRestaurantReviewsById(state, restaurantId));
    const reviewsLoadingStatus = useRequest(getReviews, restaurantId);
    const usersLoadingStatus = useRequest(getUsers);

    if (
        reviewsLoadingStatus === REQUEST_STATUS.loading ||
        usersLoadingStatus === REQUEST_STATUS.loading
    ) {
        return <div>Loading...</div>;
    }


    return <Reviews reviewIds={reviews} />
}