import React from 'react'

const WaitLoading = () => {
  return (
   <div className='my-2 flex justify-center items-center gap-2'>
   <div className="animate-spin border-4 border-t-0 border-b-0 border-red-700 w-8 h-8 rounded-full"></div>
   <div className="">Loading<span className='animate-pulse'>...</span></div>
   </div>
  )
}

export default WaitLoading