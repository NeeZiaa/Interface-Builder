import { T_Item, T_ItemsWrapper } from "../../types/components/containers/ItemTypes";
import Item from "./Item";

const ItemsWrapper: React.FC<T_ItemsWrapper> = ({title, items}) => {

    return (
        <>
            {title && <h1>{title}</h1>}
            <div className="items-wrapper">
                {items.map((item: T_Item, index) => (
                    <Item 
                        key={index} 
                        title={item.title}
                    >
                        {item.children}
                    </Item>
                ))}
            </div>
        </>
    );
}

export default ItemsWrapper;