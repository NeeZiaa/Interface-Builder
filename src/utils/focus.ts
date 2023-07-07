import { postFetch } from "./postFetch"

const focusIn = () => {
    postFetch({
        url: process.env.REACT_APP_API_URL + '/',
        body: { focus: true },
        onSuccess: (data: string) => console.log(data),
        onError: (error: unknown) => console.log(error)
    })
}

const focusOut = () => {
    postFetch({
        url: process.env.REACT_APP_API_URL + '/',
        body: { focus: false },
        onSuccess: (data: string) => console.log(data),
        onError: (error: unknown) => console.log(error)
    })
}