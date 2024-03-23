import React from 'react'

const SelectLanguage = () => {
   return (
      <>
         <section className='h-dvh w-full bg-BlackShade flex justify-center items-center'>
            <div className='w-520 py-5 px-6 rounded-20px bg-white'>
               <h3 className='text-2xl font-medium text-primaryGreen1 mb-10'>Please Select A Language</h3>
               <div className='flex gap-5'>
                  <div className='p-4 bg-teal-500'></div>
                  <div className='p-4 bg-green-500'></div>
               </div>
            </div>
         </section>
      </>
   )
}

export default SelectLanguage