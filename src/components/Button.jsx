import React from 'react'

function Button({children, handleClick}) {
  return (
    <button className='action__buttons' onClick={handleClick}>
        {children}
    </button>
  )
}

export default Button