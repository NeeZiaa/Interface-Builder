import { Context, ReactNode, createContext, useEffect, useState, useCallback } from "react";

interface InputContextType {
  subscribe: ((reaction: (key: string) => void) => void) | null;
  unsubscribe: ((reaction: (key: string) => void) => void) | null;
}
type InputContextTypeNullable = Partial<InputContextType>;
type ReactionArray = ((key: string) => void)[];

export const InputContext = createContext<InputContextTypeNullable>({ subscribe: null, unsubscribe: null }) as Context<InputContextType>;

export default function KeyboardListener({ children }: { children: ReactNode }) {
  const [reactions, setReactions] = useState<ReactionArray>([]);

  const onKeyPress = useCallback(
    (e: KeyboardEvent) => {
      console.log("onKeyPress", e.key);
      console.log(reactions);
      for (const r of reactions) r(e.key);
    },
    [reactions]
  );

  const subscribe = (reaction: (key: string) => void) => {
    if (reactions.includes(reaction)) return;
    setReactions((r) => [...r, reaction]);
  };

  const unsubscribe = (reaction: (key: string) => void) => {
    if (reactions.includes(reaction)) setReactions((r) => r.filter((re) => re !== reaction));
  };

  useEffect(() => {
    console.log("useEffect")
    window.addEventListener("keypress", onKeyPress);
    return () => window.removeEventListener("keypress", onKeyPress);
  }, [onKeyPress]);

  return <InputContext.Provider value={{ subscribe, unsubscribe }}>{children}</InputContext.Provider>;
}