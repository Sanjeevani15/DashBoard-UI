import Layout from "../components/Layout";
import Image from 'next/image';

import uiux from '../public/images/uiux.png';
import bulb from '../public/images/bulb.png';
import puzzle from '../public/images/puzzle.png';
import rocket from '../public/images/rocket.png';
import box from '../public/images/box.png'


export default function Home() {
  return (
    <div className="text">
      <Layout className="text">
    <div>

      <div className="flex flex-wrap justify-between mt-8">
            
            {/* for heading starting */}
                      <div className="text-black ml-8">
                                        <h1 className="text-3xl font-medium tracking-wide">Hello Rakib</h1>
                                        <h3 className='text-sm font-light tracking-tight mt-1'>Welcome back!</h3>
                      </div>
            {/* for heading ending */}


              <div className="flex justify-end">

              
                <div className="input-group relative flex flex-nowrap justify end items-stretch w-full mb-4 xl:w-96">

              {/* this is for the search box */}
                  <div className="flex flex-nowrap w-100 bg-white rounded-lg h-12 ml-6">  

                    <input type="search" className="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding rounded-full transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Search" aria-label="Search" aria-describedby="button-addon2"/>

                     <span className="input-group-text flex items-center px-3 py-1.5 text-base font-normal text-gray-300 text-center whitespace-nowrap rounded" id="basic-addon2">

                      <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="search" className="w-5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        
                        <path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"></path>
                      </svg>
                    </span>
                    </div> 
                    {/* ending of search box */}

                 
                  {/* notification bell starting */}
                  <button className="inline-block relative pl-6">
                  <div className="w-12 h-12 p-3 bg-white rounded-lg">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                      </svg>
                      <span className="animate-ping absolute top-2.5 right-3.5 block h-1 w-1 rounded-full ring-2 ring-red-400 bg-red-600"></span>
                  </div>
                  </button>
                    {/* notification bell ending*/}
                  
                  </div>
            </div>

      </div>


{/* second part of the home section:  cards */}

<div className=" flex flex-wrap justify-evenly mt-20 ml-6">
  
  {/* first  */}
  <div className="group flex flex-col md:flex-row rounded-[30px] bg-white shadow-lg hover:bg-gradient-to-r from-pink-400 via-red-400 to-orange-300">
  <div className="md:h-20 md:w-20 ml-6 my-10 relative">
     <Image
      src={uiux}
      alt="Tickets"
      width={140}
      height={140}

    /></div>
  
  <div className="pt-12 pr-12 pl-4 flex flex-col">
      <h5 className="text-black text-xl font-semibold mb-2 group-hover:text-white">UI/UX Design</h5>
      <p className="text-gray-700 text-base mb-4 group-hover:text-white">24 Task </p>
      
    </div>
  </div>

{/* second */}
<div className="group flex flex-col md:flex-row rounded-[30px] bg-white shadow-lg hover:bg-gradient-to-r from-pink-400 via-red-400 to-orange-300">
  <div className="md:h-20 md:w-20 ml-6 my-10 relative">
     <Image
      src={bulb}
      alt="bulb"
      width={80}
      height={80}
    
    /></div>
  
  <div className="pt-12 pr-12 pl-4 flex flex-col">
      <h5 className="text-black text-xl font-semibold mb-2 group-hover:text-white">Art and Sketch</h5>
      <p className="text-gray-700 text-base mb-4 group-hover:text-white">10 Task </p>
      
    </div>
  </div>

  {/* third */}
  <div className="group flex flex-col md:flex-row rounded-[30px] bg-white shadow-lg hover:bg-gradient-to-r from-pink-400 via-red-400 to-orange-300">
  <div className="md:h-20 md:w-20 ml-6 my-10 relative">
     <Image
      src={puzzle}
      alt="Tickets"
      width={80}
      height={80}
  
    /></div>
  
  <div className="pt-12 pr-12 pl-4 flex flex-col">
      <h5 className="text-black text-xl font-medium mb-2 group-hover:text-white">Marketing Ads</h5>
      <p className="text-gray-700 text-base mb-4 group-hover:text-white">20 Task</p>
      
    </div>
  </div>

</div>

{/* ending of second part of the home section:  cards */}



{/* project heading section starting*/}

<div className="relative flex py-5 items-center mt-5 ml-6 mr-10">
    <span className="flex-shrink mx-4 text-xl font-medium tracking-normal text-black">Project</span>
    <div className="flex-grow border-t border-gray-400"></div>
    <button className="bg-transparent hover:bg-white hover:text-sky-400 text-gray-800  py-2 px-4 border border-gray-400 rounded-full shadow mx-2">
      Ongoing
    </button>
    <button className="bg-transparent hover:bg-white hover:text-sky-400  py-2 px-4 border border-gray-400 rounded-full mr-2 shadow">
      Pending
    </button>
</div>

{/* project heading section ending */}


{/* starting of project section cards */}
<div className="flex flex-wrap ml-8 justify-evenly">

{/* first div */}
<div className="flex flex-col rounded-[30px] bg-white shadow-lg">


<div className="group flex flex-col md:flex-row">
  <div className="md:h-20 md:w-20 ml-6 my-4 mb-4 relative">
     <Image
      src={rocket}
      alt="rocket"
      width={110}
      height={110}

    /></div>
  
      <div className="pt-6 pr-10 pl-4 pb-0 flex flex-col">
      <h5 className="text-black text-l font-semibold mb-2">Startup Website<br/>with Responsive</h5>
    
         
      <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  width={15} height={15} fill="#48d2ff"><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>
      <p className="text-gray-400 text-xs tracking-tighter ml-2">10:00 AM - 4:30 PM</p>
      </div>    
    </div>
   {/* right half side div end  */}
   </div>
   {/* end of both left and right div */}

{/* progress bar starting */}
<div className="ml-6 mr-10 flex flex-row">

<div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700 mt-2">
  <div className="bg-gradient-to-r from-blue-300 via-purple-400 to-pink-500 h-1 rounded-full dark:bg-gray-300" id="bar1"></div>
</div>
<p className="text-gray-900 text-xs tracking-tighter ml-6">65%</p>
</div>
{/* progress bar ending */}

{/* starting avatars and futher line */}
<div className="mb-4 flex flex-row">
<div className="-space-x-4 pl-8">
  <img className="relative z-10 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
  <img className="relative z-20 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
  <img className="relative z-30 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
</div>
<p className="text-gray-400 text-xs font-normal tracking-tight m-2 mr-6">T: Jane</p>
<p className="bg-pink-100 text-rose-400 text-[11px] font-bold px-2 py-1.5 pt-2 rounded-full ml-4">6 days left</p>
</div>
{/* ending avatars and futher line */}
  </div>
{/* completion of first div */}




{/* second div */}
<div className="flex flex-col rounded-[30px] bg-white shadow-lg">


<div className="group flex flex-col md:flex-row">
  <div className="md:h-20 md:w-20 ml-6 my-4 mb-4 relative">
     <Image
      src={box}
      alt="rocket"
      width={110}
      height={110}
  
    /></div>
  
      <div className="pt-6 pr-10 pl-4 pb-0 flex flex-col">
      <h5 className="text-black text-l font-medium mb-2">Product Design<br/>& app Design</h5>
    
         
      <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  width={15} height={15} fill="#ff8080"><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>
      <p className="text-gray-400 text-xs tracking-tighter ml-2">12:00 PM - 8:30 PM</p>
      </div>    
    </div>
   {/* right half side div end  */}
   </div>
   {/* end of both left and right div */}

{/* progress bar starting */}
<div className="ml-6 mr-10 flex flex-row">

<div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700 mt-2">
<div className="bg-gradient-to-r from-orange-100 via-blue-400 to-orange-200 h-1 rounded-full dark:bg-gray-300" id="bar2"></div>
</div>
<p className="text-gray-900 text-xs tracking-tighter ml-6">50%</p>
</div>
{/* progress bar ending */}

{/* starting avatars and futher line */}
<div className="mb-4 flex flex-row">
<div className="-space-x-4 pl-8">
  <img className="relative z-10 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
  <img className="relative z-20 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
  <img className="relative z-30 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
</div>
<p className="text-gray-400 text-xs font-normal tracking-tight m-2 mr-6">T: Rakib</p>
<p className="bg-sky-100 text-sky-400 text-[11px] font-bold px-2 py-1.5 pt-2 rounded-full ml-4">4 days left</p>
</div>
{/* ending avatars and futher line */}
  </div>
{/* completion of second div */}


{/* third div */}
<div className="flex flex-col rounded-[30px] bg-white shadow-lg">


<div className="group flex flex-col md:flex-row">
  <div className="md:h-20 md:w-20 ml-6 my-4 mb-4 relative">
     <Image
      src={rocket}
      alt="rocket"
      width={110}
      height={110}
     
    /></div>
  
      <div className="pt-6 pr-10 pl-4 pb-0 flex flex-col">
      <h5 className="text-black text-l font-medium mb-2">Sketch mascot<br/>logo and Avatar</h5>
    
         
      <div className="flex">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"  width={15} height={15} fill="#944dff"><path d="M256 512C114.6 512 0 397.4 0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512zM232 256C232 264 236 271.5 242.7 275.1L338.7 339.1C349.7 347.3 364.6 344.3 371.1 333.3C379.3 322.3 376.3 307.4 365.3 300L280 243.2V120C280 106.7 269.3 96 255.1 96C242.7 96 231.1 106.7 231.1 120L232 256z"/></svg>
      <p className="text-gray-400 text-xs tracking-tighter ml-2">09:00 PM - 2:40 AM</p>
      </div>    
    </div>
   {/* right half side div end  */}
   </div>
   {/* end of both left and right div */}

{/* progress bar starting */}
<div className="ml-6 mr-10 flex flex-row">

<div className="w-full bg-gray-200 rounded-full h-1 mb-4 dark:bg-gray-700 mt-2">
  <div className="bg-gradient-to-r from-orange-400 via-purple-600 to-sky-300 h-1 rounded-full dark:bg-gray-300" id="bar3"></div>
</div>
<p className="text-gray-900 text-xs tracking-tighter ml-6">85%</p>
</div>
{/* progress bar ending */}

{/* starting avatars and futher line */}
<div className="mb-4 flex flex-row">
<div className="-space-x-4 pl-8">
  <img className="relative z-10 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
  <img className="relative z-20 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
  <img className="relative z-30 inline object-cover w-8 h-8 border-2 border-white rounded-full" src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="Profile image"/>
</div>
<p className="text-gray-400 text-xs font-normal tracking-tight m-2 mr-6">T: Smith</p>
<p className="bg-violet-100 text-violet-500 text-[11px] font-bold px-2 py-1.5 pt-2 rounded-full ml-4">3 days left</p>
</div>
{/* ending avatars and futher line */}
  </div>
{/* completion of third div */}




</div>
{/* ending of project section cards */}




    </div>
  </Layout>
    
    </div>
  )
}
