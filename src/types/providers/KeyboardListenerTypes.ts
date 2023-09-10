type ReactionArray = ((event: KeyboardEvent) => void)[];
type ReactionObject = { [key: string]: ReactionArray };
type SubscriberCallback = (key: string, ...callback: ReactionArray) => void;
type NullableSubscriberCallback = SubscriberCallback | null;

interface NullableInputContextType {
  subscribeKeyboardEvent: NullableSubscriberCallback;
  unsubscribeKeyboardEvent: NullableSubscriberCallback;
}

interface InputContextType {
  subscribeKeyboardEvent: SubscriberCallback;
  unsubscribeKeyboardEvent: SubscriberCallback;
}

export type {
    ReactionArray,
    ReactionObject,
    NullableInputContextType,
    InputContextType,
    SubscriberCallback
}