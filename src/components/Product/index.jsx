import React from 'react'

const Product = ({name, Price}) => {
  return (
    <>
      <td>
        {name}
      </td>
      <td>
        {Price}
      </td>
    </>
  )
}

export default Product