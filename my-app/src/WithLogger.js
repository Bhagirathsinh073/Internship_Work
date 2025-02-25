import React from 'react'

const WithLogger = (WrappedComponet) =>{

    return(props) =>{
        console.log('Component Rendered', WrappedComponet.name);
        return <WrappedComponet {...props}/>;
    };
};

export default WithLogger;

 