import { Context, createContext, useState } from "react";

type FocusableItem = HTMLElement;
type FocusableItemArray = FocusableItem[];
type NullableFocusableItemArray = FocusableItemArray | null;
type SubscriberCallback = (item: FocusableItem) => void;
type NullableSubscriberCallback = SubscriberCallback | null;

interface FocusableItemsTypeNullable {
    items: NullableFocusableItemArray;
    add: NullableSubscriberCallback;
    remove: NullableSubscriberCallback;
}

interface FocusableItemsType {
    items: FocusableItem[] | null;
    add: (item: FocusableItem) => void;
    remove: (item: FocusableItem) => void;
}

export const FocusableContext = createContext<FocusableItemsTypeNullable>({ items: null, add: null, remove: null }) as Context<FocusableItemsType>;

export default function FocusableMenu({ children }: { children: React.ReactNode }) {
    const [items, setItems] = useState<FocusableItemArray>([]);

    const add = (item: FocusableItem) => {
        if (items.length === 0) {
            setItems([item]);
            return;
        }
        for (const i of items) {
            if (i === item) return;
        }
        setItems((i) => [...i, item]);
    };

    const remove = (item: FocusableItem) => {
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

    return <FocusableContext.Provider value={{ items, add, remove }}>{children}</FocusableContext.Provider>;
}