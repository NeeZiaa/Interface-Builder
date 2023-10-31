type PostFetchProps = {
    url: string;
    body: object;
    headers?: object;
    onSuccess?: (data: string) => void;
    onError?: (error: unknown) => void;
}

type CallbackProps = {
    type: string;
    name: string;
    data?: unknown;
}

export type { PostFetchProps, CallbackProps };