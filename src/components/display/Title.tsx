import { useCallback, useContext, useEffect } from "react";
import { T_Title } from "../../types/components/display/Title";

const Title: React.FC<T_Title> = ({children, size, color, font}) => {
    
    return (
        <h1 style={{fontSize: size, color: color, fontFamily: font}}>{children}</h1>
    );
}

export default Title;