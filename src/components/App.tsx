import '../styles/index.scss';
import { useContext, useEffect, useState } from "react";
import { EventContext } from "../providers/EventListener";
import { build } from "../build/builder";

const addWebView = () => {
    postMessage({ 
        action: 'createWebView', 
        name: 'test', 
        context: {
            theme: "dark",
            font: "arial",
            style: "normal",
            width: "100%",
            height: "100%",
            position: "top-left"
        },
        components: [
            {
                type: "Header",
                props: {
                    title: "Hello c'est un exemple",
                    banner: "assets/image.png",
                    description: "Petit texte de description en bas de header"
                }
            },
            {
                type: "Field",
                props: {
                    label: "Field",
                    icon: "Icon",
                    style: ["light", "transparent"],
                    callback: "field_callback"
                },
                children: [
                    {
                        type: "TextField",
                        props: {
                            type: "text",
                            name: "Name",
                            placeholder: "Placeholder",
                            value: "Value"
                        }
                    }                   
                ]
            },
            {
                type: "Field",
                props: {
                    label: "Field 2",
                    icon: "Icon",
                    style: ["light", "transparent"],
                    callback: "field_callback"
                },
                children: [
                    {
                        type: "TextField",
                        props: {
                            type: "text",
                            name: "Test",
                            placeholder: "Placeholder",
                            value: "Value"
                        }
                    }
                ]
            }
        ]
    })
}

const updateWebView = () => {
    postMessage({ 
        action: 'updateWebView', 
        name: 'test', 
        context: {
            theme: "dark",
            font: "arial",
            style: "normal",
            width: "100%",
            height: "100%",
            position: "top-left"
        },
        components: [
            {
                type: "Header",
                props: {
                    title: "Hello c'est un exemple",
                    banner: "assets/image.png",
                    description: "Petit texte de description en bas de header"
                }
            },
            {
                type: "Field",
                props: {
                    label: "PasswordField Test",
                    icon: "Icon",
                    style: ["light", "transparent"],
                    callback: "field_callback"
                },
                children: [
                    {
                        type: "PasswordField",
                        props: {
                            type: "text",
                            name: "Name",
                            placeholder: "Placeholder",
                            value: "Value"
                        }
                    }                   
                ]
            },
            {
                type: "Field",
                props: {
                    label: "Field 2",
                    icon: "Icon",
                    style: ["light", "transparent"],
                    callback: "field_callback"
                },
                children: [
                    {
                        type: "TextField",
                        props: {
                            type: "text",
                            name: "Test",
                            placeholder: "Placeholder",
                            value: "Value"
                        }
                    }
                ]
            }
        ]
    })
}

const removeWebView = () => {
    postMessage({ action: 'closeWebView', name: 'test' })
}

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
                setAppData([...appData, (e as MessageEvent).data])
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
                {appData.map((data) => {
                    return (
                        build(data)
                    )
                })}
                <button onClick={removeWebView}>
                    Click to add remove webview
                </button>                
                <button onClick={updateWebView}>
                    Click to add update webview
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