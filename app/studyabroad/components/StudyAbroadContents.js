import React from 'react'
import SideBar from './SideBar';
import Content from './Content';

const StudyAbroadContents = () => {
   return (
      <>
         <div className='w-full pt-62 pb-454'>
            <div className='max-w-container mx-auto px-2 grid grid-cols-9 gap-14'>
               <SideBar />
               <Content />
            </div>
         </div>
      </>
   )
}

export default StudyAbroadContents