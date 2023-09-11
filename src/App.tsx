// import './App.css';
// import Interface from './components/containers/Interface';
// import placeholderData from './build/createWebView.json' // Importing placeholder data
// import './styles/index.scss'; // Importing scss file to use in the project
// import { build } from './build/builder';
// import { useContext, useEffect, useState } from 'react';
// import { EventContext } from './providers/EventListener';

import { useContext, useEffect, useState } from "react";
import { EventContext } from "./providers/EventListener";
import { build } from "./build/builder";
import Interface from "./components/containers/Interface";

// function App() {

//     type Data = Partial<{
//         action: string,
//         context: object,
//         components: object,
//     }>
    
//     const { subscribeEventListener, unsubscribeEventListener } = useContext(EventContext);
    
//     const [ data, setData ] = useState<Data>({});

//     const onMessage = (e: Event) => {
//         console.log(e)
//         setData((e as MessageEvent).data);
//     }

//     useEffect(() => {
//         subscribeEventListener({ event: 'message', element: window, callback: onMessage });
//         return () => {
//             unsubscribeEventListener({ event: 'message', element: window, callback: onMessage });
//         }
//     }, [])

//     if(Object.keys(data).length !== 0) {
//         if(data.action !== 'openWebView') {
//             return <></>;
//         }
//         return (
//             <Interface>      
//                 {build(data)}
//             </Interface>
//         )
//     } else {
//         return <></>;
//     }

    

// }

// export default App;

const App = () => {

    type InterfaceData = Partial<{
        action: string,
        name: string,
        context: object,
        components: object,
    }>    
    
    type AppData = InterfaceData[];


    const { subscribeEventListener, unsubscribeEventListener } = useContext(EventContext);


    const appData: AppData = [];

    const onMessage = (e: Event) => {
        console.log(e)

        switch((e as MessageEvent).data.action) {
            case 'createWebView':
                if(appData.find((data) => data.name === (e as MessageEvent).data.name)) {
                    console.error('WebView with the same name already exists, ignoring the request')
                } else {
                    appData.push((e as MessageEvent).data);
                }
                break;
            case 'closeWebView':
                if(appData.find((data) => data.name === (e as MessageEvent).data.name)) {
                    appData.splice(appData.findIndex((data) => data.name === (e as MessageEvent).data.name), 1);
                } else {
                    console.error('WebView with this name does not exists, ignoring the request')
                }
                break;
            case 'updateWebView':
                if(appData.find((data) => data.name === (e as MessageEvent).data.name)) {
                    appData.splice(appData.findIndex((data) => data.name === (e as MessageEvent).data.name), 1, (e as MessageEvent).data);
                } else {
                    console.error('WebView with this name does not exists, ignoring the request')
                }
                break;
            case 'openWebView':
                if(appData.find((data) => data.name === (e as MessageEvent).data.name)) {
                    console.error('WebView with the same name already exists, ignoring the request')
                } else {
                    appData.push((e as MessageEvent).data);
                }
                break;
            default:
                break;
        }
    }

    useEffect(() => {
        subscribeEventListener({ event: 'message', element: window, callback: onMessage });
        return () => {
            unsubscribeEventListener({ event: 'message', element: window, callback: onMessage });
        }
    }, [])

    if(appData.length !== 0) {
        return (
            <>
                {appData.map((data, index) => {
                    return (
                        build(data)
                    )
                })}
            </>
        )
    } else {
        return <></>;
    }

}

export default App;