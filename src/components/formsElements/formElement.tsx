import { useCallback, useContext, useEffect } from "react";
import { InputContext } from "../../providers/KeyboardListener";

const FormElement: React.FC<T_FormElement> = ({ icon, label, value, onChange, onFocus, onBlur }) => {
    const { subscribe, unsubscribe } = useContext(InputContext);
    const onKeyEnter = useCallback(() => {
        console.log("onKeyEnter");
    }, []);
    useEffect(() => {
        subscribe("Enter", onKeyEnter);
        return () => unsubscribe("Enter", onKeyEnter);
    }, [subscribe, unsubscribe, onKeyEnter]);
    
    return (React.createElement("div", { className: "form-element-container" },
        React.createElement("label", { htmlFor: name }, label),
}