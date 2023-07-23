import { ReactNode, createContext, useEffect, useState } from "react";

const InputContext = createContext({});

type ReactionArray = ((key: string) => void)[];

export default function InputProvider({ children }: { children: ReactNode }) {
  const [reactions, setReactions] = useState<ReactionArray>([]);

  const onKeyPress = (e: KeyboardEvent) => {
    for (const r of reactions) r(e.key);
  };

  const subscribe = (reaction: (key: string) => void) => {
    setReactions((r) => [...r, reaction]);
  };

  const unsubscribe = (reaction: (key: string) => void) => {
    setReactions((r) => r.filter((re) => re !== reaction));
  };

  useEffect(() => {
    window.addEventListener("keypress", onKeyPress);
    return () => window.removeEventListener("keypress", onKeyPress);
  });

  return <InputContext.Provider value={{ subscribe, unsubscribe }}>{children}</InputContext.Provider>;
}