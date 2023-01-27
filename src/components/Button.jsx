import React from 'react'

function Button({children, handleUserLog}) {
  return (
    <button className='action__buttons' onClick={handleUserLog}>
        {children}
    </button>
  )
}

export default Button