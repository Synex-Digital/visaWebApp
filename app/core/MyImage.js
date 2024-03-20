import React from 'react';
import Image from 'next/image';

const MyImage = ({ className, source, alt }) => {
   return (
      <>
         <Image className={className} width={700} height={500} src={source} alt={alt} priority />
      </>
   );
};


export default MyImage;