
import { Context, ReactNode, createContext, useEffect, useState, useCallback } from "react";
import { InputContextType, NullableInputContextType, ReactionObject, SubscriberCallback } from "../types/providers/KeyboardListenerTypes";

export const InputContext = createContext<NullableInputContextType>({ subscribe: null, unsubscribe: null }) as Context<InputContextType>;

export default function KeyboardListener({ children }: { children: ReactNode }) {
  const [reactions, setReactions] = useState<ReactionObject>({});

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      console.log("onKeyDown", e.key);
      if (reactions[e.key] === undefined) return;
      for (const r of reactions[e.key]) r(e);
    },
    [reactions]
  );

  // Vérification de la présence de la réaction dans le tableau
  // Include ne marche pas avec les fonctions
  // Comparaison des addresses mémoires des fonctions
  const subscribe: SubscriberCallback = (key, ...callbacks) => {
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

  const unsubscribe: SubscriberCallback = (key, ...callbacks) => {
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

  return <InputContext.Provider value={{ subscribe, unsubscribe }}>{children}</InputContext.Provider>;
}