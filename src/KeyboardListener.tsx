import { Context, ReactNode, createContext, useEffect, useState, useCallback } from "react";
type Reaction = (key: string) => void;
type ReactionArray = ((key: string) => void)[];
type NullableReactionArray = ReactionArray | null;
type SubscriberCallback = (reaction: Reaction) => void;
type NullableSubscriberCallback = SubscriberCallback | null;

interface InputContextTypeNullable {
  reactions: NullableReactionArray;
  subscribe: NullableSubscriberCallback;
  unsubscribe: NullableSubscriberCallback;
}

interface InputContextType {
  reactions: ReactionArray;
  subscribe: SubscriberCallback;
  unsubscribe: SubscriberCallback;
}

export const InputContext = createContext<InputContextTypeNullable>({ reactions: null, subscribe: null, unsubscribe: null }) as Context<InputContextType>;

export default function KeyboardListener({ children }: { children: ReactNode }) {
  const [reactions, setReactions] = useState<ReactionArray>([]);

  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      console.log("onKeyDown", e.key);
      console.log(reactions);
      for (const r of reactions) r(e.key);
    },
    [reactions]
  );

  // Vérification de la présence de la réaction dans le tableau
  // Include ne marche pas avec les fonctions
  // Comparaison des addresses mémoires des fonctions
  const subscribe = (...callbacks: ReactionArray) => {
    if (reactions.length === 0) {
      setReactions(callbacks);
      return;
    }
    for (const callback of callbacks) {
      for (const r of reactions) {
        if (r === callback) return;
      }  
    }
    setReactions((r) => [...r, ...callbacks]);
    console.log("Subscribe", reactions)
  };

  const unsubscribe = (...callbacks: ReactionArray) => {
    console.log("Unsubscribe 1", reactions);
    for (const callback of callbacks) {
      for (const r of reactions) {
        console.log(callback, r)
        if (r === callback) {
          reactions.splice(reactions.indexOf(r), 1);
        }      
        setReactions(reactions);
      }    
    }         
    console.log("Unsubscribe 2", reactions);
  };

  // const unsubscribe = (...callbacks: ReactionArray) => {
  //   setReactions((prevReactions) => {
  //     const newReactions = [...prevReactions];
  //     for (const callback of callbacks) {
  //       for (const r of newReactions) {
  //         if (r === callback) {
  //           newReactions.splice(newReactions.indexOf(r), 1);
  //         }
  //       }
  //     }
  //     return newReactions;
  //   });
  // };

  useEffect(() => {
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [onKeyDown]);

  return <InputContext.Provider value={{ reactions, subscribe, unsubscribe }}>{children}</InputContext.Provider>;
}