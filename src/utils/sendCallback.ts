import { CallbackProps } from "../types/utilsTypes";
import { postFetch } from "./postFetch"

const sendCallback = ({type, name, data}: CallbackProps) => {
    postFetch({
        url: String(import.meta.env.VITE_APP_API_URL),
        body: {
            type,
            name,
            data: data ? JSON.stringify(data) : []
        }
    })
}

export default sendCallback;