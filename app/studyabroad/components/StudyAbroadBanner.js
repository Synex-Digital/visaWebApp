import React from 'react'
import Link from "next/link";
import MyImage from '../../core/MyImage';
import MyButton from '../../core/MyButton';

const StudyAbroadBanner = () => {
   return (
      <>
         <section className='bg-studyPageBanner relative '>
            <div className='max-w-container h-full mx-auto px-2 pt-32 pb-36 flex flex-col justify-center items-start relative'>
               <div className='w-553 mb-20'>
                  <h2 className='text-primary mt-10 mb-7 font-medium text-4xl'>Your dream of Studying in Canada is closer than you think!</h2>
                  <p className='text-studyPagePtag text-lg'>Learn everything you need to know about studying in Canada and get
                     end to end expert guidance from us.</p>
               </div>

               <MyButton link='#'>Get Started For Free</MyButton>

               {/* banner hero */}
               <div className="absolute bottom-16 right-0 -translate-x-20">
                  <MyImage source='/assets/Banner2/bannerImage2.png' alt='bannerImage.png' className='w-auto' />
               </div>
            </div>

            {/* banner triangle shadow */}
            <div className="absolute bottom-0 left-0">
               <MyImage source='/assets/Banner2/2ndBannerShape.png' alt='2ndBannerShape.png' className='w-auto ml-auto' />
            </div>

            {/* banner rounded shadow */}
            <div className="absolute top-0 right-0 ">
               <MyImage source='/assets/Banner2/bannerRoundedShape.png' alt='bannerRoundedShape.png' className='w-auto ml-auto' />
            </div>
         </section>
      </>
   )
}

export default StudyAbroadBanner