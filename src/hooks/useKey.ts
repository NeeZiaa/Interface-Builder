import { useEffect, useState } from "react";

const useKeyPress = (targetKey: string, callback: Function) => {

    const downHandler = (event: Event) => {
        const key = (event as KeyboardEvent).key;
        if (key === targetKey) {
            callback();
            console.log("key pressed")
        }
    };
  
    useEffect(() => {
        window.addEventListener('keydown', downHandler);
    
        return () => {
            window.removeEventListener('keydown', downHandler);
        };
    }, [targetKey, callback]);
  
}

window.addEventListener('keypress', (event) => new Event("keypress_" + (event as KeyboardEvent).key));

export default useKeyPress;