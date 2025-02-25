// import React from 'react'

const WithOpen = (WrappedComponet) => {
  return (props) =>{
    console.log("called Withopen",WrappedComponet.name);
    return <WrappedComponet {...props} isOpen={true}/>
  }
}

export default WithOpen 
