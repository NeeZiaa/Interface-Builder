type Reaction = (event: KeyboardEvent) => void;
type ReactionArray = ((event: KeyboardEvent) => void)[];
type ReactionObject = { [key: string]: ReactionArray };
type NullableReactionArray = ReactionArray | null;
type SubscriberCallback = (key: string, ...callback: ReactionArray) => void;
type NullableSubscriberCallback = SubscriberCallback | null;

interface NullableInputContextType {
  subscribe: NullableSubscriberCallback;
  unsubscribe: NullableSubscriberCallback;
}

interface InputContextType {
  subscribe: SubscriberCallback;
  unsubscribe: SubscriberCallback;
}

export type {
    ReactionArray,
    ReactionObject,
    NullableInputContextType,
    InputContextType,
    SubscriberCallback
}