export const Button = ({ text, onClick, disabled }) => {
    return (
        <button type='button' onClick={onClick} disabled={disabled}>{text}</button>
    )
}