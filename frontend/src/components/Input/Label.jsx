import React from 'react'

const Label = ({name,heading,children}) => {
  return (
    <div className=''>
        <label htmlFor={name} className="text-xl">{heading}</label>
        {children}
    </div>
  )
}

export default Label