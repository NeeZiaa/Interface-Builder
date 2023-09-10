import './App.css';
import Interface from './components/containers/Interface';

import './styles/index.scss'; // Importing scss file to use in the project
import { build } from './build/builder';
import { useContext, useEffect, useState } from 'react';
import { EventContext } from './providers/EventListener';

function App() {

    type Data = Partial<{
        action: string,
        context: object,
        components: object,
    }>
    
    const { subscribeEventListener, unsubscribeEventListener } = useContext(EventContext);
    
    const [ data, setData ] = useState<Data>({});

    const onMessage = (e: Event) => {
        console.log(e)
        setData((e as MessageEvent).data);
    }

    useEffect(() => {
        subscribeEventListener({ event: 'message', element: window, callback: onMessage });
        return () => {
            unsubscribeEventListener({ event: 'message', element: window, callback: onMessage });
        }
    }, [])

    if(Object.keys(data).length !== 0) {
        if(data.action !== 'openWebView') {
            return <></>;
        }
        return (
            <Interface>      
                {build(data)}
            </Interface>
        )
    } else {
        return <></>;
    }

    

}

export default App;