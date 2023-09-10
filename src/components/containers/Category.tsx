import { T_Category } from "../../types/components/containers/CategoryTypes";

const Category: React.FC<T_Category> = ({ label, children, onHover }) => {
    return (
        <div
            className="category-container" 
            onMouseEnter={(e) => {
                onHover && onHover(e);
            }}
        >
            <h2>{label}</h2>
            {children}
        </div>
    );
}

export default Category;