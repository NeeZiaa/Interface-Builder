
import { Context, ReactNode, createContext, useEffect, useState, useCallback } from "react";
import { InputContextType, NullableInputContextType, ReactionObject, SubscriberCallback } from "../types/providers/KeyboardListenerTypes";

export const KeyboardEventListener = createContext<NullableInputContextType>({ subscribeKeyboardEvent: null, unsubscribeKeyboardEvent: null }) as Context<InputContextType>;

export default function KeyboardListener({ children }: { children: ReactNode }) {
    const [reactions, setReactions] = useState<ReactionObject>({});

    const onKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (reactions[e.key] === undefined) return;
            for (const r of reactions[e.key]) r(e);
        },
        [reactions]
    );

    const subscribeKeyboardEvent: SubscriberCallback = (key, ...callbacks) => {
        setReactions((r) => {
            if(r[key] === undefined) return {...r, [key]: [...callbacks]};
            for (const callback of callbacks) {
                for (const re of r[key]) {
                    if (re === callback) return r;
                }
            }
            return {...r, [key]: [...r[key], ...callbacks]};
        });
    };

    const unsubscribeKeyboardEvent: SubscriberCallback = (key, ...callbacks) => {
        for (const callback of callbacks) {
            if(reactions[key] === undefined) return;
            for (const r of reactions[key]) {
                if (r === callback) {
                    reactions[key].splice(reactions[key].indexOf(r), 1);
                }      
                setReactions(reactions);
            }    
        }
    };

    useEffect(() => {
        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [onKeyDown]);

    return <KeyboardEventListener.Provider value={{ subscribeKeyboardEvent, unsubscribeKeyboardEvent }}>{children}</KeyboardEventListener.Provider>;
}