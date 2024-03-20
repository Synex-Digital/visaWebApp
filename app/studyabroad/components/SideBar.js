import Link from 'next/link'
import React from 'react'

const SideBar = () => {
   return (
      <>
         <div className='col-span-2'>
            <div className='shadow-sidebar rounded-20px pt-6 pb-5'>
               <ul className='font-light text-primary text-base flex flex-col items-center'>
                  <li className='font-medium text-white text-base bg-primary px-3.5 py-1.5 rounded-xl mb-1'>Study in Canada</li>
                  <li className='py-2.5'>Courses & Universities</li>
                  <li className='py-2.5'>Requirements</li>
                  <li className='py-2.5'>Intakes</li>
                  <li className='py-2.5'>Cost</li>
                  <li className='py-2.5'>Work</li>
                  <li className='py-2.5'>FAQ</li>
               </ul>
            </div>
         </div>
      </>
   )
}

export default SideBar