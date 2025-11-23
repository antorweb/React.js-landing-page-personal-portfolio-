// import React from 'react'

// const CommonHead = ({comp , comh2}) => {
//   return (
//     <div >


//         <p className='text-[16px] font-medium font-main text-[#EF8100] uppercase '>{comp}</p>

//         <h2 className='text-[50px] leading-[60px] font-medium font-main  text-main'>{comh2}</h2>





//     </div>
//   )
// }

// export default CommonHead

import React from 'react'

const CommonHead = ({ comp, comh2 }) => {
  return (
    <div>

      <p className='text-[14px] sm:text-[15px] md:text-[16px] font-medium font-main text-[#EF8100] uppercase'>
        {comp}
      </p>

      <h2 className='text-[28px] leading-[34px] sm:text-[36px] sm:leading-[44px] md:text-[42px] md:leading-[50px] lg:text-[50px] lg:leading-[60px] font-medium font-main text-main'>
        {comh2}
      </h2>

    </div>
  )
}

export default CommonHead
