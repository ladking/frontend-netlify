import React from 'react'
import {Link} from 'react-router-dom'
function Button({title}) {
  return (
    <Link to='/listings'>
      <button className={`bg-white pointer p-2 rounded-lg text-black font-extrabold text-base`}>
          {title}
      </button>
    </Link>
  )
}

export default Button