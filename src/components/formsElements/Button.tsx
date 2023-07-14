const Button: React.FC<T_Button> = ({ label, type="button", disabled=false, onClick }) => {
    return (
        <button 
            type="submit" 
            disabled={disabled} 
            onClick={onClick}>
            {label}
        </button>
    )
}
export default Button;