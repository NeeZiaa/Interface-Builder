import { postFetch } from "./postFetch"

interface CallbackProps {
    name: string;
    data?: unknown;
}

const sendCallback = ({name, data}: CallbackProps) => {
    postFetch({
        url: String(import.meta.env.VITE_APP_API_URL),
        body: {
            name,
            data: data ? JSON.stringify(data) : []
        }
    })
}

export default sendCallback;