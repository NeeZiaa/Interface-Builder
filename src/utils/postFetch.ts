interface PostFetchProps {
    url: string;
    body: object;
    headers?: object;
    onSuccess?: (data: string) => void;
    onError?: (error: unknown) => void;
}

export const postFetch = async ({ url, body, headers, onSuccess, onError }: PostFetchProps) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                ...headers,
            },
            body: JSON.stringify(body),
        });
        const data = await response.json();
        if (response.ok) {
            onSuccess && onSuccess(data);
            return data.json();
        } else {
            onError && onError(data);
        }
    }
    catch (error) {
        console.log("Fetch failed : ", error);
        onError && onError(error);
    }
}