import Link from 'next/link'
import React from 'react'

const MyButton = ({ children, className }) => {
   return (
      <>
         <Link
            href={"#"}
            className={`${className} bg-primary hover:bg-[#124529] duration-150 text-white text-lg font-medium px-7 py-3 rounded-xl flex items-center gap-x-3`}
         >{children}</Link>
      </>
   )
}

export default MyButton