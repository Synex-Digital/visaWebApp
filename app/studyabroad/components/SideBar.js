import Link from 'next/link'
import React from 'react'

const SideBar = () => {
   return (
      <>
         <div className='col-span-2'>
            <div className='shadow-sidebar rounded-20px pt-6 pb-5 sticky top-32'>
               <div className='font-light text-primary text-base flex flex-col items-center'>

                  <Link href="#information" className='font-medium text-white text-base bg-primary px-3.5 py-1.5 rounded-xl mb-1'>Study in Canada</Link>
                  <Link href="#courses" className='py-2.5'>Courses & Universities</Link>
                  <Link href="#" className='py-2.5'>Requirements</Link>
                  <Link href="#" className='py-2.5'>Intakes</Link>
                  <Link href="#cost" className='py-2.5'>Cost</Link>
                  <Link href="#" className='py-2.5'>Work</Link>
                  <Link href="#faq" className='py-2.5'>FAQ</Link>

               </div>
            </div>
         </div>
      </>
   )
}

export default SideBar