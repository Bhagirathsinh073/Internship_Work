import React from 'react'

export default function SPOC({name,contact,fullName,phone}) {

    // console.log(user);
    return (
       <>
       <h2>Child</h2>
       <h3>{name}</h3>
       <h3>{contact}</h3>
       <h3>{fullName}</h3>
       <h3>{phone}</h3>
       </> 
    )
 
}
