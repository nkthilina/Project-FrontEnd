import React from 'react'
import { Link } from 'react-router-dom'

function Button({text}) {
  return (
    <div>
        <button className="bg-SecondaryColor  w-auto rounded-md font-medium  
         p-3">
            <Link to="/" className="text-white uppercase whitespace-nowrap">{text}</Link>
        </button>
    </div>
  )
}

export default Button
