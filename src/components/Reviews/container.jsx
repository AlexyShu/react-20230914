import {Reviews} from './component.jsx';
import {useGetReviewsQuery} from "../../redux/services/api.js";

export const ReviewsContainer = ({restaurantId}) => {
    const { data, isFetching } = useGetReviewsQuery(restaurantId);

    return (
        <>
            {isFetching ? <div>Loading...</div> : <Reviews reviews={data} />}
        </>)
}