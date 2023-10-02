export const Rewiews = ({reviews}) => {
    return (<ul>
        { reviews.map(({ user, text }) => <li>{user}: {text}</li>) }
    </ul>)
}