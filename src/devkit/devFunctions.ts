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
            position: "top-right"
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
                    // callback: "field_callback"
                },
                children: [
                    {
                        type: "TextField",
                        props: {
                            name: "testField",
                            // placeholder: "Placeholder",
                            // value: "Value"
                        }
                    }
                ]
            },
            {
                type: "Field",
                props: {
                    label: "Field 2",
                    icon: "Icon",
                    // callback: "field_callback"
                },
                children: [
                    {
                        type: "Selector",
                        props: {
                            name: "secondField",
                            options: [
                                {
                                    value: "1",
                                    label: "Option 1",
                                    selected: true
                                },
                                {
                                    value: "2",
                                    label: "Option 2"
                                },
                                {
                                    value: "3",
                                    label: "Option 3"
                                }
                            ]
                            // placeholder: "Placeholder",
                            // value: "Value"
                        }
                    }
                ]
            },
            {
                type: "Field",
                props: {
                    label: "Field 3",
                    icon: "Icon",
                    // callback: "field_callback"
                },
                children: [
                    {
                        type: "Range",
                        props: {
                            name: "range",
                            min: 0,
                            max: 100,
                            step: 1,
                            defaultValue: 50
                        }
                    }
                ]
            }
        ]
    })
}

const addAnotherWebView = () => {
    postMessage({ 
        action: 'createWebView', 
        name: 'test2', 
        context: {
            theme: "dark",
            font: "arial",
            style: "normal",
            width: "100%",
            height: "100%",
            position: "middle-center"
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
    postMessage({ 
        action: 'closeWebView', 
        name: 'test' 
    })
}

const openWebView = () => {
    postMessage({
        action: "openWebView",
        name: "test",
        webview: "testInterface"
    })
}

export {
    addWebView,
    addAnotherWebView,
    updateWebView,
    removeWebView,
    openWebView
}