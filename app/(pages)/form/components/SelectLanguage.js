import React from 'react'
import MyImage from '../../../core/MyImage'

const SelectLanguage = () => {
   return (
      <>
         <section className='h-dvh w-full bg-BlackShade flex justify-center items-center'>
            <div className='w-520 py-7 px-6 rounded-20px bg-white flex flex-col items-center'>
               <h3 className='text-2xl font-medium text-primaryGreen1 mb-10'>Please Select A Language</h3>
               <div className='flex gap-5'>
                  <div className='group p-4 pt-5 border-2 border-dashed border-Ash1 rounded-lg cursor-pointer duration-300 hover:border-Black'>
                     <MyImage source='/assets/flags/uk-flag.webp' alt='uk-flag.webp' className='w-24' />
                     <h3 className='text-Black mt-2 text-center group-hover:text-primaryGreen2'>English</h3>
                  </div>
                  <div className='group p-4 pt-5 border-2 border-dashed border-Ash1 rounded-lg cursor-pointer duration-300 hover:border-Black'>
                     <MyImage source='/assets/flags/bd-flag.webp' alt='bd-flag.webp' className='w-24' />
                     <h3 className='text-Black mt-2 text-center group-hover:text-primaryGreen2'>English</h3>
                  </div>
               </div>
            </div>
         </section>
      </>
   )
}

export default SelectLanguage