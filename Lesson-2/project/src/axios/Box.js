import React from 'react'

function Box(props) {
    const {body,title,id} = props.postData
  return (
    <>
        <div style={{padding:"21px",margin:"10px"}}>
            <table style={{border:"1px solid black"}}>
                    
                <tr>
                    <td>{id}</td>
                </tr>
                <tr>
                    <th>Title</th>
                    <td>{title}</td>
                </tr>
                <tr>
                    <th>Body</th>
                    <td>{body}</td>
                </tr>
            </table>
        </div>
    </>
  )
}

export default Box