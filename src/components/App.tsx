import '../styles/index.scss';
import { useContext, useEffect, useState } from "react";
import { EventContext } from "../providers/EventListener";
import { build } from "../build/builder";
import { addWebView, addAnotherWebView, removeWebView, updateWebView } from '../devkit/devFunctions';
import { InterfaceManager } from '../providers/InterfaceManager';

const App = () => {

    type InterfaceData = Partial<{
        action: string,
        name: string,
        context: object,
        components: object,
    }>    
    
    type AppData = InterfaceData[];


    const { subscribeEventListener, unsubscribeEventListener } = useContext(EventContext);


    const [ appData, setAppData ] = useState<AppData>([]);

    const onMessage = (e: Event) => {
        switch((e as MessageEvent).data.action) {
            case 'createWebView':
                // setAppData([...appData, (e as MessageEvent).data])
                setAppData((appD) => {
                    console.log(appD)
                    return [...appD, (e as MessageEvent).data]
                    // return [...appD, (e as MessageEvent).data]
                })
                //TODO: console.error('WebView with the same name already exists, ignoring the request')
                break;
            case 'closeWebView':
                setAppData((appD) => {
                    return appD.filter((data) => data.name !== (e as MessageEvent).data.name)
                })
                // TODO: console.error('WebView with this name does not exists, ignoring the request')
                break;
            case 'updateWebView':
                setAppData((appD) => {
                    return appD.map((data) => {
                        if(data.name === (e as MessageEvent).data.name) {
                            return (e as MessageEvent).data;
                        }
                        console.error('WebView with this name does not exists, ignoring the request')
                        return data;
                    })
                })
                break;
            case 'openWebView':
                if(appData.find((data) => data.name === (e as MessageEvent).data.name)) {
                    console.error('WebView with the same name already exists, ignoring the request')
                } else {
                    setAppData([...appData, (e as MessageEvent).data])
                }
                break;
            default:
                console.error('Invalid action, ignoring the request')
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
                <InterfaceManager>
                    {appData.map((data) => { return ( build(data) )} )}                
                </InterfaceManager>
                <button onClick={addAnotherWebView}>
                    Click to add new webview
                </button>
                <button onClick={removeWebView}>
                    Click to remove webview
                </button>                
                <button onClick={updateWebView}>
                    Click to update webview
                </button>
            </>
        )
    } else {
        return (
        <>                
            <button onClick={addWebView}>
                Click to add new webview
            </button>
        </>);
    }

}

export default App;