import { T_Interface } from "../../types/components/containers/InterfaceTypes"
import Title from "../display/Title";

const Interface: React.FC<T_Interface> = ({ label, children, width, height, onClick, onHover }) => {
    return (
        <div 
            className="interface-container" 
            style={{ width, height }} 
            onClick={(e) => {
                onClick && onClick(e);
            }}
            onMouseEnter={(e) => {
                onHover && onHover(e);
            }}>
            <Title>{label}</Title>
            {children}
        </div>
    )
}

export default Interface;