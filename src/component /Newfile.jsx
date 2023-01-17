import React from 'react'

const Newfile = (props) => {
    const {newfun}=props
    const addvalue=()=>{
      newfun(1);
    }
  return (
    <div>
        this is new file child component
        <button onClick={addvalue}>Click</button>
   
      
    </div>
  )
}

export default Newfile
