import { createContext, ReactNode, useEffect, useState, Context } from "react";
import { EventContextType, EventData, NullableEventContextType } from "../types/providers/EventListenerTypes";


const EventContext = createContext<NullableEventContextType>({ subscribeEventListener: null, unsubscribeEventListener: null }) as Context<EventContextType>;

const EventListener = ({ children }: { children: ReactNode }) => {
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

export { EventListener, EventContext }