import React from 'react';
import Layout from '../components/Layout';

const teamchat = () => {
  return (
  
    <Layout>



<div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen bg-white rounded-[36px]">
   

   <div className="flex sm:items-center justify-between py-3 border-b-2 border-gray-200">
      <div className="relative flex items-center space-x-4">
        
         <div className="flex flex-col leading-tight">
            <div className="text-2xl mt-1 flex items-center">
               <span className="text-black text-4xl mr-3 tracking-wide font-bold">TEAM  CHAT</span>
            </div>
          
        
         <span className="text-sm text-gray-600 mr-4">Rakib, John, Jane are online</span>
        

         </div>
      </div>
      <div className="flex items-center space-x-2">
         <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
         </button>
         <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
         </button>
         <button type="button" className="inline-flex items-center justify-center rounded-lg border h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
         <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
          </svg>
         </button>
      </div>
   </div>
  
     
   <div id="messages" className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
      <div className="chat-message">
         <div className="flex items-start">
          
            <img src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="My profile" className="w-8 h-8 rounded-full order-1"/>
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span className="px-4 py-3 rounded-lg inline-block rounded-bl-none bg-red-100 text-black text-sm">Hey there, Need a food app design with full UI/UX. </span></div>
            <p className='text-gray-500'>John Smith</p>
            </div>
            
           
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span className="px-4 py-3 rounded-lg inline-block rounded-br-none bg-sky-100 text-black text-sm">Sure! Ready to help. </span></div>
            </div>
        
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-start">
         <img src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940" alt="My profile" className="w-8 h-8 rounded-full order-1"/>
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span className="px-4 py-3 rounded-lg inline-block bg-red-100 text-black text-sm">Lorem ipsum dolor sit amet. Qui autem veritatis ut nisi error.</span></div>
               
               <div>
                  <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none  bg-red-100 text-black text-sm">
                     Check the line above.
                     
                  </span>
                  <p className='text-gray-500 mt-2'>Jane Foster</p>
               </div>
            </div>
          
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-end justify-end">
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
               <div><span className="px-4 py-3 rounded-lg inline-block rounded-br-none bg-sky-100 text-black text-sm">Sure lets rock guys. Let me know how I can help!</span></div>
            </div>
           
         </div>
      </div>
      <div className="chat-message">
         <div className="flex items-start">
         <img src="https://mdbcdn.b-cdn.net/img/new/avatars/8.webp" alt="My profile" className="w-8 h-8 rounded-full order-1"/>
            <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
               <div><span className="px-4 py-3 rounded-lg inline-block rounded-bl-none bg-red-100 text-black text-sm">Hi, guys recently I am using this tailwind css, this is so cool. You all just check this out. :)</span></div>
               <p className='text-gray-500'>Rakib Wales</p>
            </div>
          
         </div>
      </div>
      </div>
   <div className="border-t-2 border-gray-200 px-4 pt-4 pb-6 sm:mb-0 ">
      <div className="relative flex">
         <span className="absolute inset-y-0 flex items-center">
            <button type="button" className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"></path>
               </svg>
            </button>
         </span>
         <input type="text" placeholder="Write your message!" className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"/>
         <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
               </svg>
            </button>
            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"></path>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"></path>
               </svg>
            </button>
            <button type="button" className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none">
               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-gray-600">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
               </svg>
            </button>
            <button type="button" className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none">
               <span className="font-bold">Send</span>
               <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 ml-2 transform rotate-90">
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
               </svg>
            </button>
         </div>
      </div>
   </div>
</div>


    </Layout>
  )
}

export default teamchat