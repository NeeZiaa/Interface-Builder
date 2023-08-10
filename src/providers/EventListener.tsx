import React, { createContext, ReactNode, useEffect, useState, useCallback, Context } from "react";

type EventCallback = (e: Event) => void;

type EventData = {
  event: string;
  element: HTMLElement;
  callback: EventCallback;
};

type subscribeEventListener = (data: EventData) => void;

type EventContextType = {
    subscribeEventListener: subscribeEventListener
    unsubscribeEventListener: subscribeEventListener
};

type NullableEventContextType = {
    subscribeEventListener: subscribeEventListener | null;
    unsubscribeEventListener: subscribeEventListener | null;
};

export const EventContext = createContext<NullableEventContextType>({ subscribeEventListener: null, unsubscribeEventListener: null }) as Context<EventContextType>;

export default function EventListener({ children }: { children: ReactNode }) {
  const [eventListeners, setEventListeners] = useState<EventData[]>([]);

  const subscribeEventListener = (data: EventData) => {
    setEventListeners((listeners) => {
        for (const listener of listeners) {
            if (listener.element === data.element && listener.event === data.event && listener.callback === data.callback) return listeners;
        }
        return [...listeners, data];
    });
  };

  const unsubscribeEventListener = (data: EventData) => {
    setEventListeners((listeners) => {
        for (const listener of listeners) {
            if (listener.element === data.element && listener.event === data.event && listener.callback === data.callback) {
                listeners.splice(listeners.indexOf(listener), 1);
            }
        }
        return listeners;
    });
  };

  useEffect(() => {
    console.log('Add listeners', eventListeners)
    for (const eventData of eventListeners) {
      eventData.element.addEventListener(eventData.event, eventData.callback);
    }
    return () => {
      for (const eventData of eventListeners) {
        eventData.element.removeEventListener(eventData.event, eventData.callback);
      }
    };
  }, [eventListeners]);

  return <EventContext.Provider value={{ subscribeEventListener, unsubscribeEventListener }}>{children}</EventContext.Provider>;
}