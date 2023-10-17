import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {selectReviewById, selectReviewLoadingStatus} from '../../redux/entities/review/selector';
import { Review} from './component.jsx';
import {getReviews} from '../../redux/entities/review/thunks/get-reviews.js';
import {REQUEST_STATUS} from '../../constants/statuses.js';

export const ReviewContainer = ({ reviewId }) => {
    const review = useSelector((state) =>
        selectReviewById(state, reviewId));
    const loadingStatus = useSelector(selectReviewLoadingStatus);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviews())
    }, []);

    if (!review) {
        return null;
    }

    return (
        <>
            {loadingStatus === REQUEST_STATUS.pending ?
                <div>Loading...</div> : <Review review={review} />}
        </>)
};