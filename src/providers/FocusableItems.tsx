import { Context, createContext, useState } from "react";

type FocusableItem = HTMLElement;
type FocusableItemArray = FocusableItem[];
type NullableFocusableItemArray = FocusableItemArray | null;
type SubscriberCallback = (item: FocusableItem) => void;
type NullableSubscriberCallback = SubscriberCallback | null;

interface FocusableItemsTypeNullable {
    items: NullableFocusableItemArray;
    subscribe: NullableSubscriberCallback;
    unsubscribe: NullableSubscriberCallback;
}

interface FocusableItemsType {
    items: FocusableItem[] | null;
    subscribe: (item: FocusableItem) => void;
    unsubscribe: (item: FocusableItem) => void;
}

export const focusableItems = createContext<FocusableItemsTypeNullable>({ items: null, subscribe: null, unsubscribe: null }) as Context<FocusableItemsType>;

export default function FocusableItems({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<FocusableItemArray>([]);

    const subscribe = (item: FocusableItem) => {
        if (items.length === 0) {
            setItems([item]);
            return;
        }
        for (const i of items) {
            if (i === item) return;
        }
        setItems((i) => [...i, item]);
    };

    const unsubscribe = (item: FocusableItem) => {
        setItems((prevItems) => {
            const newItems = [...prevItems];
            for (const i of newItems) {
                if (i === item) {
                    newItems.splice(newItems.indexOf(i), 1);
                }
            }
            return newItems;
        });
    };

    return <focusableItems.Provider value={{ items, subscribe, unsubscribe }}>{children}</focusableItems.Provider>;
}