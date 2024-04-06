import React from 'react'

function Button({text}) {
  return (
    <div>
        <button className="bg-SecondaryColor text-[#5651e5] w-auto rounded-md font-medium my-6 mx-auto p-3">
            <span className="text-white uppercase whitespace-nowrap">{text}</span>
        </button>
    </div>
  )
}

export default Button
