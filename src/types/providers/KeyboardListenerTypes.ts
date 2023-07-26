type Reaction = (key: string) => void;
type ReactionArray = ((key: string) => void)[];
type ReactionObject = { [key: string]: ReactionArray };
type NullableReactionArray = ReactionArray | null;
type SubscriberCallback = (reaction: Reaction) => void;
type NullableSubscriberCallback = SubscriberCallback | null;

interface NullableInputContextType {
  reactions: NullableReactionArray;
  subscribe: NullableSubscriberCallback;
  unsubscribe: NullableSubscriberCallback;
}

interface InputContextType {
  reactions: ReactionArray;
  subscribe: SubscriberCallback;
  unsubscribe: SubscriberCallback;
}



export type {
    ReactionArray,
    ReactionObject,
    NullableInputContextType,
    InputContextType,
}