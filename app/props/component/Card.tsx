import React from 'react'

interface bodyType {
    header : string ;
    content : string ;
    footer : string ;
}

export const Card = ({header , content , footer} : bodyType) => {
  return (
   <>
<div style={{
    display: 'inline-flex', 
    flexDirection: 'column', 
    border: '1px solid #e8e8e8', 
    padding: 10, 
    margin: 5, 
    borderRadius: 10,
    // width: 'fit-content', // ✅ ความกว้างเท่าเนื้อหา
    // height: 'auto'        // ✅ ความสูงตามเนื้อหา (ปกติเป็นค่า default อยู่แล้ว)
}}>
    <div>{header}</div>
    <div>{content}</div>
    <div>{footer}</div>
</div>
   </>
  )
}
