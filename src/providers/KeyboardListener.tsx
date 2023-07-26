
import { Context, ReactNode, createContext, useEffect, useState, useCallback } from "react";
import { InputContextType, NullableInputContextType, ReactionArray, ReactionObject, SubscriberCallback } from "../types/providers/KeyboardListenerTypes";

export const InputContext = createContext<NullableInputContextType>({ subscribe: null, unsubscribe: null }) as Context<InputContextType>;

export default function KeyboardListener({ children }: { children: ReactNode }) {
  const [reactions, setReactions] = useState<ReactionObject>({});

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      console.log("onKeyDown", e.key);
      console.log(reactions);
      if (reactions[e.key] === undefined) return;
      for (const r of reactions[e.key]) r(e);
    //   for (const r of reactions) r(e.key);
    },
    [reactions]
  );

  // Vérification de la présence de la réaction dans le tableau
  // Include ne marche pas avec les fonctions
  // Comparaison des addresses mémoires des fonctions
  const subscribe: SubscriberCallback = (key: string, ...callbacks: ReactionArray) => {
    if(reactions[key] === undefined && Object.keys(reactions).length === 0) {
      setReactions({ ...reactions, [key]: callbacks });
      return;
    }
    for (const callback of callbacks) {
      for (const r of reactions[key]) {
        if (r === callback) return;
      }
    }
    setReactions((r) => ({...r, [key]: [...r[key], ...callbacks]}));
  };

  const unsubscribe: SubscriberCallback = (key: string, ...callbacks: ReactionArray) => {
    for (const callback of callbacks) {
      if(reactions[key] === undefined) return;
      for (const r of reactions[key]) {
        console.log(callback, r)
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