import { CallbackProps } from "../types/utilsTypes";
import { postFetch } from "./postFetch"

const sendCallback = ({type, data}: CallbackProps) => {
    postFetch({
        url: String(import.meta.env.VITE_APP_API_URL),
        body: {
            type,
            data: data ? JSON.stringify(data) : []
        }
    })
}

export default sendCallback;