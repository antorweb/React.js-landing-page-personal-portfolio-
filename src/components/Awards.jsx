// import React from 'react'
// import CommonHead from './common/CommonHead'
// import no1 from '../assets/images/01.png'
// import no2 from '../assets/images/02.png'
// import no3 from '../assets/images/03.png'
// import no4 from '../assets/images/04.png'
// import no5 from '../assets/images/05.png'
// import no6 from '../assets/images/06.png'
// import no7 from '../assets/images/07.png'
// import no8 from '../assets/images/08.png'
// import no9 from '../assets/images/09.png'

// const Awards = () => {
//   return (
//     <>
    
    
//     <section id='awards' className='mt-[120px] mb-[140px]'>
//         <div className="container">
//            <div id='awards-row' className='pt-[140px] border border-[#00413D] '>
//                 <div className='pl-[216px]'><CommonHead comp={'awards'} /></div>

//             {/*---------- heading  */}
//             <div className='flex pl-[216px] gap-[126px]  items-center'>
//                 <div className=''><CommonHead comh2={'83+ Design Awards'} /></div>
//                 <div className='w-[440px] h-[78px]'><p>Solvency based award-winning design director and UI/UX design expert with 10 years of experience in design and management.</p></div>
//             </div>
//         {/* ----------- sealection cart div */}
//             <div className='pt-[300px] pb-[10px] relative flex'>
//                 <div className='flex pl-[20px]'>
//                     <div><img src={no1} alt="no-1" /></div>
//                     <div><img src={no2} alt="no-2" /></div>
//                 </div>
//                 <div className=' pl-[20px] pr-[20px]'>
//                     <div><img src={no3} alt="no-3" /></div>
//                     <div className=' absolute top-[98px] left-[543px]'><img src={no4} alt="no-4" /></div>
//                 </div>
//                 <div className='flex pr-[30px]'>
//                     <div><img src={no5} alt="no-5" /></div>
//                     <div><img src={no6} alt="no-6" /></div>
//                 </div>
//                 <div className='flex gap-[20px]'>
//                     <div><img src={no7} alt="no-7" /></div>
//                     <div className=' absolute top-[93px] left-[1220px]'><img src={no8} alt="no-8" /></div>
//                     <div><img src={no9} alt="no-9" /></div>
//                 </div>
//            </div>
//             </div>
//         </div>
//     </section>
    
    
    
//     </>
//   )
// }

// export default Awards


import React from 'react'
import CommonHead from './common/CommonHead'
import no1 from '../assets/images/01.png'
import no2 from '../assets/images/02.png'
import no3 from '../assets/images/03.png'
import no4 from '../assets/images/04.png'
import no5 from '../assets/images/05.png'
import no6 from '../assets/images/06.png'
import no7 from '../assets/images/07.png'
import no8 from '../assets/images/08.png'
import no9 from '../assets/images/09.png'

const Awards = () => {
  return (
    <>
    <section id='awards' className='mt-[120px] mb-[140px]'>
        <div className="container">

           <div id='awards-row' className='pt-[140px] border border-[#00413D]'>

                {/* ----- heading ----- */}
                <div className='pl-[216px] max-lg:pl-[40px] max-md:pl-[20px]'>
                    <CommonHead comp={'awards'} />
                </div>

                <div className='flex pl-[216px] max-lg:pl-[40px] max-md:pl-[20px] 
                                max-md:flex-col gap-[126px] max-md:gap-[20px] items-center'>

                    <div><CommonHead comh2={'83+ Design Awards'} /></div>

                    <div className='w-[440px] max-md:w-full h-[78px]'>
                        <p>
                            Solvency based award-winning design director and UI/UX design expert
                            with 10 years of experience in design and management.
                        </p>
                    </div>
                </div>

                {/* ----------- AWARD BLOCKS ---------- */}
                <div className='pt-[300px] pb-[10px] relative 
                                flex max-xl:flex-wrap max-lg:flex-wrap 
                                max-md:flex-col max-md:items-center gap-[40px]'>

                    {/* Row 1 */}
                    <div className='flex pl-[20px] max-md:pl-0 gap-[20px]'>
                        <div><img src={no1} alt="no-1" /></div>
                        <div><img src={no2} alt="no-2" /></div>
                    </div>

                    {/* Row 2 */}
                    <div className='pl-[20px] pr-[20px] max-md:p-0 relative'>
                        <div><img src={no3} alt="no-3" /></div>

                        {/* Absolute image responsive fix */}
                        <div className='absolute top-[98px] left-[543px] 
                                        max-xl:left-[300px] 
                                        max-lg:left-[200px] 
                                        max-md:static max-md:mt-[20px]'>
                            <img src={no4} alt="no-4" />
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className='flex pr-[30px] max-md:pr-0 gap-[20px]'>
                        <div><img src={no5} alt="no-5" /></div>
                        <div><img src={no6} alt="no-6" /></div>
                    </div>

                    {/* Row 4 */}
                    <div className='flex gap-[20px] relative'>
                        <div><img src={no7} alt="no-7" /></div>

                        <div className='absolute top-[93px] left-[1220px] 
                                        max-2xl:left-[900px]
                                        max-xl:left-[600px]
                                        max-lg:left-[350px]
                                        max-md:static max-md:mt-[20px]'>
                            <img src={no8} alt="no-8" />
                        </div>

                        <div><img src={no9} alt="no-9" /></div>
                    </div>

                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Awards
