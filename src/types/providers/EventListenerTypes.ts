type EventCallback = (e: Event) => void;

type EventData = {
  event: string;
  element: HTMLElement | Window;
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

export type { EventCallback, EventData, EventContextType, NullableEventContextType };