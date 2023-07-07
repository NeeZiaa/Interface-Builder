import { T_Item } from "../../types/components/containers/ItemTypes";
import sendCallback from "../../utils/sendCallback";
import { play } from "../../utils/sound";

const Item: React.FC<T_Item> = ({ title, children, onHover, onClick }) => {
    return (
        <div
            className="item-container" 
            onMouseEnter={(e) => {
                play("hover");
                onHover && onHover(e);
            }}
            onClick={(e) => {
                play("click");
                onClick && onClick(e);
                sendCallback({name: "click", data: { event: JSON.stringify(e) }});
            }}
        >
            {title && <h2>{title}</h2>}
            {children}
        </div>
    );
}

export default Item;