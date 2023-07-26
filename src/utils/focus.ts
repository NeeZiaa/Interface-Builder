import { postFetch } from "./postFetch"

const focusIn = () => {
    postFetch({
        url: import.meta.env.VITE_APP_API_URL + '/',
        body: { focus: true },
        onSuccess: (data: string) => console.log(data),
        onError: (error: unknown) => console.log(error)
    })
}

const focusOut = () => {
    console.log('focusOut', import.meta.env)
    postFetch({
        url: import.meta.env.VITE_APP_API_URL + '/',
        body: { focus: false },
        onSuccess: (data: string) => console.log(data),
        onError: (error: unknown) => console.log(error)
    })
}

export { focusIn, focusOut }