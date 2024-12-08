import React from 'react'

function  BlackHeading  ({text, textColor}: {text: string, textColor:string})  {
  return (
    <div className='flex items-center gap-4'>
      <div className='w-5 h-10 bg-[#1A0B5B] rounded'></div>
      <span className={`text-${textColor}-500 font-semibold font-family-sans`}>{text}</span>
    
    
    
    </div>
  )
}

export default BlackHeading    


